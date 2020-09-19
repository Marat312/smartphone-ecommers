import React from 'react'
import Catalog from '../Catalog'
import Product from '../Product'

function Donuts() {
  return (
    <div>
      <h1>Donuts</h1>
      <div className="d-flex">
           <div>
             <Catalog />
           </div>
            {/* <Product/> */}
           <div>
          </div>
         
         </div>
    </div>
  )
}

export default Donuts
