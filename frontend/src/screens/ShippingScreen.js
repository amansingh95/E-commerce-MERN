import React, {useState} from 'react'
import { Form, Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from "../components/CheckoutSteps";
import FormContainer from "../components/FormContainer";

const ShippingScreen = ({history}) => {
const cart= useSelector(state => state.cart)
const {shippingAddress}=cart
    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)
const dispatch = useDispatch()
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(saveShippingAddress({address, city, postalCode, country}))
        history.push('/payment')

    }
    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='address'>
                    <Form.Label>Address </Form.Label>
                    <Form.Control type='text' 
                                  placeholder='Enter Address'
                                  required
                                  value={address} 
                                  onChange={(e) => setAddress(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='city'>
                    <Form.Label>City </Form.Label>
                    <Form.Control type='text' 
                                  placeholder='Enter city'
                                  required
                                  value={city} 
                                  onChange={(e) => setCity(e.target.value)}>

                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='postalCode'>
                    <Form.Label>PostalCode </Form.Label>
                    <Form.Control type='text' 
                                  placeholder='Enter postalCode'
                                  required
                                  value={postalCode} 
                                  onChange={(e) => setPostalCode(e.target.value)}>

                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='country'>
                    <Form.Label>Country </Form.Label>
                    <Form.Control type='text' 
                                  placeholder='Enter country'
                                  required
                                  value={country} 
                                  onChange={(e) => setCountry(e.target.value)}>

                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'> Countinue</Button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen
