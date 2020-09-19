import React from 'react'
import Catalog from '../Catalog'
import Product from '../Product'

function Biscuits() {
  return (
    <div className="d-flex mt-5">
           <div>
             <Catalog />
           </div>
           <Product/>
           <div>
             
          </div>
    </div>
  )
}

export default Biscuits
