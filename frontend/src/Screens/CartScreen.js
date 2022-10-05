import React, {useEffect,useState} from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, ListGroup, Image, Form, Button, Card,FormControl} from 'react-bootstrap'
import Message from '../Components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = ({history}) => {
  const params = useParams();
  const productId = params.id
  const qty = params.qty ? Number(params.qty.split('=')[1]) : 1 
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const {cartItems} = cart


  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    } else {
      
    }
  }, [dispatch, productId, qty])

const removeFromCartHandler = (id) => {
  dispatch(removeFromCart(id))
}

const checkoutHandler = () => {
  console.log('checkout')
  navigate('/login?redirect=shipping')
}
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.lenght === 0 
        ?<Message>Your cart is empty <Link to='/'>Go back</Link></Message>
        :(<ListGroup variant='flush'>
          {cartItems.map(item => (
            <ListGroup.Item key={item.product}>
              <Row>
                <Col md={2}>
                  <Image src={item.image} alt={item.name} fluid rounded/>
                </Col>
                <Col md={3}>
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                </Col>
                <Col md={2}>
                  ${item.price}
                </Col>
                <Col md={2}>
                  <FormControl
                        as = "select" 
                        value={item.qty} 
                        onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))} >
                          {
                            [...Array(item.countInStock).keys()].map(x => (
                              <option key={x + 1} value={x + 1}>
                                {x+1}
                              </option>
                            ))
                          }
                      </FormControl>
                </Col>
                <Col md={2}>
                  <Button
                  type='button'
                  variant='light'
                  onClick={()=> removeFromCartHandler(item.product)}>
                    <i className='fas fa-trash'></i>
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>)}
      </Col>
       <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Subtotal ({cartItems.reduce((acc, item)=>acc+item.qty, 0)}) items</h2>
              ${cartItems.reduce((acc, item)=>acc + item.qty * item.price,0).toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <button 
               type='button' 
               className='btn btn-primary my-3' 
               disabled={cartItems.length === 0}
               onClick={checkoutHandler}>
                Proceed To Checkout
               </button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen