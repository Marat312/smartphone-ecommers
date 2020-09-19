import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, addQuantity, subtractQuantity } from "../redux/Action";
import { Container } from "reactstrap";
import { MDBTable, MDBTableBody, MDBTableHead, MDBIcon } from 'mdbreact';
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';

import { MDBBtn,MDBCollapse, MDBRow, MDBContainer, MDBCol,MDBInput, MDBNavLink } from "mdbreact";



class Cart extends Component {
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };

  state = {
    collapseID: ""
  }
  
  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  }

  render() {
    console.log(this.props);
    let addedItems = this.props.addedItems 
    localStorage.setItem("cartProduct", JSON.stringify(addedItems)) 
      
       return (
         <div>
                   <Container className="mb-5">
          <Roll left>
           <MDBTable bordered>
              <MDBTableHead color="blue-gradient"  textWhite >
                <tr>
                  <th>Товар</th>
                  <th>Цена</th>
                  <th>Количество</th>
                  <th>Сумма</th>
                  <th>Удалить</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>

              {this.props.addedItems.map(item => (
                
                <tr className="bg-light">
                  <th className="d-flex">
                     <div className="item-img d-flex align-items-center">
                        <img style={{width:"80px", height:"60px"}} className="cardimg" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" alt="ff" />
                     </div>
                     <div className="d-flex align-items-center ml-2">{item.product}</div> 
                 </th>
                  <th className="ml-2">{item.price}$</th>
                  <th >
                        <button  className="mr-2" onClick={() => {this.handleAddQuantity(item.id)}}><MDBIcon style={{fontSize:"10px"}} icon="plus"/></button>
                      <strong style={{fontSize:"20px"}}>{item.quantity}</strong>
                       <button className="ml-2" onClick={() => {this.handleSubtractQuantity(item.id)}}><MDBIcon style={{fontSize:"10px"}} icon="minus"/></button>
                  </th>
              <th><strong>{item.price * item.quantity}</strong></th>
                  <th><Link><MDBIcon onClick={() => { this.handleRemove(item.id); }} icon="trash-alt" size="2x" /></Link>
                  </th>
                 
                </tr>
                
                ) )} 
              </MDBTableBody>
             </MDBTable>
           </Roll>
           
           <MDBBtn onClick={this.toggleCollapse("basicCollapse")}>Заказать товар
           
           </MDBBtn>
           <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
           
               <MDBContainer className="mt-5">
                      <MDBRow>
                        <MDBCol md="6">
                          <Zoom top>
                          <form >
                            <p className="h5 text-center mb-4">Оформление заказа</p>
                            <div className="grey-text">
                              <MDBInput label="Ваше имя" icon="user" group type="text" validate error="wrong"
                                success="right" />
                              <MDBInput label="Ваш email" icon="envelope" group type="email" validate error="wrong"
                                success="right" />
                                 <MDBInput label="Номер телефона" icon="phone" group type="number" validate error="wrong"
                                success="right" />
                              <MDBInput label="Адрес доставки" icon="map-marked-alt" group type="text" validate error="wrong" success="right" />
                              <MDBInput group type="text" rows="2" label="Квартира или офис" validate error="wrong" icon="building" />
                              
                            </div>
                            <div className="text-center">
                              <MDBBtn outline color="secondary">
                                   <MDBNavLink className="nav-link shadow-box-example hoverable" to="/payment">Оплата товара</MDBNavLink>
                              </MDBBtn>
                            </div>
                          </form>
                          </Zoom>
                         
                        </MDBCol>
                      </MDBRow>
                 </MDBContainer>
           </MDBCollapse>
        </Container>
         </div>
         
        
    );         
  };
};

const mapStateToProps = (state) => state.ProductReducer;
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

