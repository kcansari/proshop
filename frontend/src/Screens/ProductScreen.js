import React, {useState, useEffect} from 'react'
import { Form, Link, useParams,useNavigate} from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, ListGroupItem, FormControl } from 'react-bootstrap'
import Rating from '../Components/Rating'
import {useDispatch, useSelector} from 'react-redux'
import { listProductDetails } from '../actions/productActions'
import Loader from '../Components/Loader'
import Message from '../Components/Message'


const ProductScreen = () => {

  const [qty, setQty] = useState(1)
  const params = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const producDetails = useSelector(state => state.productDetails)
  const { loading, error, product} = producDetails

  useEffect(()=>{
    dispatch(listProductDetails(params.id))
  }, [dispatch,params.id])

  const addToCartHandler = () => {
    navigate(`/cart/${params.id}=qty=${qty}`)
  }

  return (
    <>
      <Link className='btn btn-primary my-3' to='/'>Go Back</Link>
      {loading ? <Loader/>: error ? <Message variant='danger'>{error}</Message> :
      <Row>
          <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
          </Col>

          <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroupItem>
                  <h3>{product.name}</h3>
                </ListGroupItem>
                

                <ListGroupItem>
                  <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </ListGroupItem>

                <ListGroupItem>
                  Price: ${product.price}
                </ListGroupItem>

                <ListGroupItem>
                  Description: {product.description}
                </ListGroupItem>
              </ListGroup>
          </Col>

          <Col md={3}>
            <ListGroup  variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col><strong>${product.price}</strong></Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col><strong>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</strong></Col>
                </Row>
              </ListGroup.Item>

              {product.countInStock > 0  && (
                <ListGroup.Item>
                  <Row>
                    <Col>Quantity</Col>
                    <Col>
                      <FormControl
                        as = "select" 
                        value={qty} 
                        onChange={(e) => setQty(e.target.value)}>
                          {
                            [...Array(product.countInStock).keys()].map(x => (
                              <option key={x + 1} value={x + 1}>
                                {x+1}
                              </option>
                            ))
                          }
                      </FormControl>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                  onClick={addToCartHandler} 
                  className='btn-block' 
                  type='button'
                  disabled={product.countInStock === 0} > Add To Cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
      </Row> }
    </>
  )
}

export default ProductScreen