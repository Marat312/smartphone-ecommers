import React from 'react'
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";

// import Carousel from 'react-bootstrap/esm/Carousel'
import Footer from '../components/Footer'
import Product from './Product'
import Carousel from '../components/Carousel'
import Catalog from './Catalog'
import '../components/Header.css'





function Home() {

      

  return (
    <div className=" bg-light">
    <Carousel />
         <div className="d-flex bg-light">
           <div>
             <Catalog />
           </div>
            <Product  />
            
           <div>
             
          </div>
         
         
         </div>
         <MDBRow>
      <MDBCol  className="d-flex justify-content-center">
       
        <MDBPagination circle>
          <MDBPageItem disabled>
            <MDBPageNav className="page-link">
              <span>Начало</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem disabled>
            <MDBPageNav className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem active>
            <MDBPageNav className="page-link">
              1 <span className="sr-only">(current)</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link">
              2
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link">
              3
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link">
              4
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link">
              5
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link">
              &raquo;
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link">
              Конец
            </MDBPageNav>
          </MDBPageItem>
        </MDBPagination>
      </MDBCol>
    </MDBRow>
         
                
          <Footer />
    </div>
  )
}

export default Home
