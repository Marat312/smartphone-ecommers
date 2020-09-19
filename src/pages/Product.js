import React , { useEffect, useState  } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import { Container, Form, Label } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import Fade from 'react-reveal/Fade'
import {Modal, Button} from 'react-bootstrap'



import { connect } from "react-redux";
import {
  getProduct,
  addNewProduct,
  deleteProduct,
  updateProduct,
  addToCart
} from "../redux/Action";
import Axios from "axios";
import { url } from "../url/url";
import { Input } from "reactstrap";
import ProductDetail from './ProductDetail';



function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props} 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
           Описание товара
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex">
         <div className="mr-4" >
             <img src='https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg' />
          </div>
          <dvi>
            <h2>Name</h2>
            <p>vskdvn werinve owjvf woiv woif woerihf qeowifhw </p>
                <ul>
                    <li>Название</li>
                    <li>Цена</li>
                    <li>Вес</li>
                    <li>Добавить в корзину</li>
                </ul>         
                      
          </dvi>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



function Product ({ getProduct, ...props }) {

  const [productN, setProductN] = useState("");
  const [price, setPrice] = useState("");
  const [info, setInfo] = useState("");
  const [isEdit, setIsEdit] = useState();
  const [image, setImage] = useState('');

  const [modalShow, setModalShow] = React.useState(false);  

  const location = useLocation()

  useEffect(() => {
    Axios.get(url + "/products" + location.search).then((res) => {
      const { data } = res;
      console.log(location.search, data)
      if (data) getProduct(data);
    });
  }, [getProduct, location]);
  console.log(props.products);

  function delData(id) {
    async function delProduct(id) {
      const res = await Axios.delete(url + `/products/${id}`);
      console.log(res);
      props.deleteProduct(id);
    }
    delProduct(id);
  }
  function EditData(id, productN, price, info) {
    setProductN(productN);
    setPrice(price);
    setInfo(info);
    setInfo(image);
    if (isEdit !== id) {
      setIsEdit(id);
    } else {
      setIsEdit("");
    }
  }
  function saveData(id) {
    const data = {
      id,
      productN,
      price,
      info,
      
      
    };
    setIsEdit("");
    


    async function saveProduct(id) {
      const res = await Axios.patch(url + `/products/${id}`, data);
      props.updateProduct(res.data);
      console.log(res.data);
    }
    saveProduct(id);
  }

  function addCart(id){
    props.addToCart(id)
  }
    


  return (
    <Container className="bg-light ">
      <Fade top cascade>
          <MDBRow className="mt-3 mb-5">
          {props.products ? ( props.products.map((product) =>(
            
              <MDBCol   key={product.id} md='4'>
                <div  >
                <MDBCard  className="mt-5 shadow-box-example z-depth-5 " narrow>
                <MDBView cascade>
                  <MDBCardImage
                    hover zoom
                    // overlay='white-slight'
                    className='card-img-top' 
                    src={product.image}
                    alt='food'
                  />
                </MDBView>

                <MDBCardBody>
                  <div className="d-flex justify-content-between">
                    <h5 className='pink-text'>
                        <div>
                          <Form>Вес: 150г</Form><Form>Порций: 1</Form>
                          </div>
                      </h5>
                         <Link><MDBIcon onClick={()=>addCart(product.id)}  size="2x" icon="cart-plus"/> </Link>
                  </div>

                <MDBCardTitle className='font-weight-bold'><strong>{product.productN}</strong></MDBCardTitle>   
                  <MDBCardText>{product.info}</MDBCardText>
        
                  <div className="d-flex justify-content-between">
                    <MDBBtn className="ml-2" outline color="primary" size="sm"  onClick={() => setModalShow(true)} ><MDBIcon icon="stream" /><strong> Детали</strong></MDBBtn>

                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />

                    <MDBCardText style={{fontSize:"20px"}}>Цена: {product.price} <MDBIcon icon="ruble-sign" /></MDBCardText>
                  </div>  
                  <div className="d-flex justify-content-center">
                    <MDBBtn className="mr-4" outline color="danger" size="sm" onClick={() => delData(product.id)} ><strong>Удалить</strong></MDBBtn>
                    <MDBBtn outline color="info" size="sm" onClick={() =>
                    EditData(
                      product.id,
                      product.product,
                      product.price,
                      product.info,
                      product.image
                    )
                  }><strong>Редактировать</strong></MDBBtn>
                   </div>
                    {isEdit === product.id ? (
                  <div>
                    <Label> Название продукта</Label>
                    <Input
                      placeholder="Название продукта"
                     
                      onChange={(e) => setProductN(e.target.value)}
                      className="w-80"
                      />

                    <Label>Цена продукта</Label>
                    <Input
                      placeholder="Цена продукта"
                      
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-80" />

                    <Label>Описание продукта</Label>
                    <Input
                      placeholder="Описание продукта"
                      
                      onChange={(e) => setInfo(e.target.value)}
                      className="w-80" />

                     <Label>Загрузите фото</Label>
                    <Input
                      placeholder="Загрузите фото"
                      
                      onChange={(e) => setImage(e.target.value)}
                      className="w-80" />


                    <button onClick={() => saveData(product.id)} 
                      className="btn btn-warning btn">save</button>
                    
                  </div>  ) : " "}
                </MDBCardBody>  
              </MDBCard>
                </div>
             
            </MDBCol>
             ))
            ) : (
              <p>Product List Is Empty</p>
            )}
         </MDBRow>
      </Fade>
      
    </Container>
   
  )
}

const mapStateToProps = (state) => {
  let { products } = state.ProductReducer;
  return { products };
};
const mapDispatchToProps= (dispatch)=>{
  return{
     addToCart: (id)=>{dispatch(addToCart(id))}
       }
  }

export default connect(mapStateToProps, {
  getProduct,
  addNewProduct,
  deleteProduct,
  updateProduct,
  addToCart
})(Product);

