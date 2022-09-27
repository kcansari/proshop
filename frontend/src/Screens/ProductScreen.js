import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../Components/Rating'
import products from '../products'

const ProductScreen = () => {
  const params = useParams();
  const product = products.find((p) => p._id === params.id)

  return (
    <>
      <Link className='btn btn-primary my-3' to='/'>Go Back</Link>
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

              <ListGroup.Item>
                <Button 
                  className='btn-block' 
                  type='button'
                  disabled={product.countInStock === 0} > Add To Cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
      </Row>
    </>
  )
}

export default ProductScreen