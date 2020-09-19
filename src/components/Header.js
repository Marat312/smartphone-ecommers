import React, { Component} from "react";
import {MDBNav, MDBNavbar,MDBFormInline, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon } from "mdbreact";
import LoginButton from "./auth/LoginButton";
import LogoutButton from "./auth/LogoutButton";
import Profile from "./auth/Profile";
import logo from '../assets/col.png'
// import headerlogo from '../assets/candy_shop.jpg'
// import admin from '../assets/admin.png'
import './Header.css'
import { Container } from "reactstrap";




class Header extends Component { 
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
};




render() {
  return (
    <div className="bg-light ff">
      <div >
        <Container className="d-flex justify-content-around align-items-center" >
             <MDBNavLink  color="#7b3a5c" to="#!"> <MDBIcon size="2x" icon="map-marker-alt"/>ул.Манаса 312<br/> <span className="ml-4">г.Бишкек</span> </MDBNavLink> 
                  <MDBNavLink className="nav-link"  to="/home"><img style={{marginTop:"-10px",marginBottom:"-15px"}}  src={logo}></img></MDBNavLink> 
             <MDBNavLink to="#!"> <MDBIcon size="2x" icon="phone"/> 0312 312 312</MDBNavLink>
        </Container>
            
          
      </div>
     
      <hr/>
      <Container className="d-flex justify-content-between">
          <MDBNav className="ff">
          <MDBNavItem active>
              <MDBNavLink className="nav-link shadow-box-example hoverable blue-text"  to="/home">Главная</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="nav-link shadow-box-example hoverable blue-text" to="/about">О нас</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="nav-link shadow-box-example hoverable blue-text" to="/contacts">Контакты</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="nav-link shadow-box-example hoverable blue-text" to="/payment">Оплата товара</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="nav-link shadow-box-example hoverable blue-text" to="/newProduct">Добавить товар</MDBNavLink>
            </MDBNavItem>
          </MDBNav>

           <MDBNavbarNav  right>
              <div className="d-flex">
                <MDBNavItem>
                  <MDBFormInline waves>
                    <div className="md-form my-0">
                        <input  className="form-control mr-sm-3" type="text" placeholder="Поиск по названию товара" aria-label="Search" />
                    </div>
                  </MDBFormInline>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink className="nav-link mr-5" to="/orderCart"><MDBIcon size="2x" icon="shopping-cart" /></MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                      <LoginButton />
                      <Profile /> 
                  </MDBNavItem>

                  <MDBNavItem>
                      <LogoutButton/>
                  </MDBNavItem>
                  {/* <MDBNavItem>
                      <MDBNavLink className="nav-link shadow-box-example hoverable black-text d-flex align-items-center" to="/"><strong>Админ</strong>
                      <img style={{width:"50px", height:"50px", marginLeft:"8px"}} src={admin}></img></MDBNavLink>
                  </MDBNavItem> */}
              </div>
            
          </MDBNavbarNav>
      </Container>

     

     























       
      {/* <MDBNavbar className="pt-0 pb-0"  color="aqua-gradient"  dark expand="md" scrolling>
      <MDBNavLink className="nav-link shadow-box-example hoverable white-text"  to="/home">
         <img style={{width:"160px", height:"60px"}} src={logo}></img>
      </MDBNavLink>

      
       
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left >
            <MDBNavItem active>
              <MDBNavLink className="nav-link shadow-box-example hoverable white-text"  to="/home">Главная</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="nav-link shadow-box-example hoverable white-text" to="/about">О нас</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="nav-link shadow-box-example hoverable white-text" to="/contacts">Контакты</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="nav-link shadow-box-example hoverable white-text" to="/payment">Оплата товара</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="nav-link shadow-box-example hoverable white-text" to="/newProduct">Добавить товар</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>

          <MDBNavbarNav right>
            <MDBNavItem>
                <MDBFormInline waves>
                   <div className="md-form my-0">
                      <input  className="form-control mr-sm-3" type="text" placeholder="Поиск по названию товара" aria-label="Search" />
                   </div>
              </MDBFormInline>
            </MDBNavItem>
             <MDBNavItem>
                <MDBNavLink className="nav-link mr-5" to="/orderCart"><MDBIcon size="2x" icon="shopping-cart" /></MDBNavLink>
          
             </MDBNavItem>

            <MDBNavItem>
                <LoginButton />
                <Profile /> 
            </MDBNavItem>

            <MDBNavItem>
                <LogoutButton/>
            </MDBNavItem>
            <MDBNavItem>
                 <MDBNavLink className="nav-link shadow-box-example hoverable black-text d-flex align-items-center" to="/"><strong>Админ</strong>
                 <img style={{width:"50px", height:"50px", marginLeft:"8px"}} src={admin}></img></MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar> */}
      <div>
      
    
      </div>
    </div>
     

    );
  }
}

export default Header;





















