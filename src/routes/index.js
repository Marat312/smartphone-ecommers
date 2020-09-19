import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Contacts from '../pages/Contacts'
import Address from '../pages/Payment'
import Layout from '../components/Layout'
import OrderCart from '../pages/OrderCart'
import NewProduct from '../pages/NewProduct'

import Cake from '../pages/ProductPages/Cake'
import Croissants from '../pages/ProductPages/Croissants'
import Donuts from '../pages/ProductPages/Donuts'
import Pastries from '../pages/ProductPages/Pastries'
import Pies from '../pages/ProductPages/Pies'
import Cheescake from '../pages/ProductPages/Cheescake'
import Biscuits from '../pages/ProductPages/Biscuits'
import IceCreams from '../pages/ProductPages/IceCreams'


function Routes () {
  return (
    
     <BrowserRouter>
        <Switch>
           <Layout>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/contacts" component={Contacts}/>
            <Route exact path="/payment" component={Address}/>
            <Route exact path="/about" component={AboutUs}/>
            <Route exact path="/newProduct" component={NewProduct}/>
            <Route exact path="/orderCart" component={OrderCart}/>
                   
                    {/* Product pages  */}
            {/* <Route exact path="/category/:category" component={Home}/> */}
           </Layout>
        </Switch>
     </BrowserRouter>
    
  )
}

export default Routes
