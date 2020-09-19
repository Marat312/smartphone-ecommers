import React from 'react'
import { Container } from 'reactstrap'
import Cart from '../components/Cart'
// import Header from '../components/Header'
// import '../components/Header.css'
import Footer from '../components/Footer'


function OrderCart() {
  return (
    <div className="bg-light">
      {/* <Header /> */}
      
       <h1>Ваша корзинка</h1>
       <Container>
         <Cart />
         
       </Container>
       <Footer />
    </div>
  )
}

export default OrderCart
