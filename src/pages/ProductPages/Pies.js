import React from 'react'
import Catalog from '../Catalog'
import Product from '../Product'

function Pies() {
  return (
    <div>
      <h1>Pies</h1>
      <div className="d-flex">
           <div>
             <Catalog />
           </div>
            {/* <Product /> */}
           <div>
          </div>
         
         </div>
    </div>
  )
}

export default Pies
