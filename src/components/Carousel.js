import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCarouselItem,
  MDBCarouselInner,
  MDBMask,
  MDBView,
  MDBCarousel
} from "mdbreact";

class Carousel extends Component {
  render() {
    return ( 
      <div>
        
          

      <MDBCarousel   activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1 mt-4">
        <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
          <MDBRow> 
          <MDBCol md="6" className="mb-3">
          <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" className="img-fluid z-depth-1" alt="" />
        </MDBCol>
        <MDBCol md="6" className="mb-3">
          <img src="https://images.unsplash.com/photo-1579954115563-e72bf1381629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" className="img-fluid z-depth-1" alt="" / >
        </MDBCol>   
        
      </MDBRow>
          <MDBMask overlay="black-light" />
          </MDBView>
         
        </MDBCarouselItem>


        <MDBCarouselItem itemId="2">
          <MDBView>
          <MDBRow>
          <MDBCol md="6" className="mb-3">  
          <img  src="https://images.unsplash.com/photo-1598401575995-dcdbbebe55b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" className="img-fluid z-depth-1" alt="" />
        </MDBCol>
        <MDBCol md="6" className="mb-3">
          <img src="https://images.unsplash.com/photo-1516549445027-be9aebc57853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80" className="img-fluid z-depth-1" alt="" / >
        </MDBCol>
      </MDBRow>
          <MDBMask overlay="black-light" />
          </MDBView>
        </MDBCarouselItem>


        <MDBCarouselItem itemId="3">
          <MDBView>
          <MDBRow>
        <MDBCol md="6" className="mb-3">
          <img src="https://images.unsplash.com/photo-1452804510874-0093bc2223ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" className="img-fluid z-depth-1" alt="" />
        </MDBCol>
        <MDBCol md="6" className="mb-3">
          <img src="https://images.unsplash.com/photo-1486955535268-e5c3bd81aeb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" className="img-fluid z-depth-1" alt="" / >
        </MDBCol>
      </MDBRow>
          <MDBMask overlay="black-light" />
          </MDBView>
          {/* <MDBCarouselCaption>
          <h1 className="h1-responsive">Вкус востока</h1>
          </MDBCarouselCaption> */}
        </MDBCarouselItem>
      </MDBCarouselInner>
               
      </MDBCarousel>
      </div>
      

      
    );
  }
}

export default Carousel;

