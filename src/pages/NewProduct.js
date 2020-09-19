import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import Axios from 'axios';
import {url} from '../url/url'
import { connect } from 'react-redux';
import {addNewProduct} from '../redux/Action'
import FooterPagePro from '../components/Footer';
// import Header from '../components/Header';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import {FormText } from 'reactstrap';

// import FooterPagePro from '../components/Footer';
function NewProduct(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [info, setInfo] = useState('');
  const [category, setCategory] = useState('');


function addProduct(e){
  e.preventDefault();
  const data ={
    id: Date.now(),
    name,
    number,
    email,
    product,
    price,
    info,
    image,
    category
  }
  if(name !== '' && email !== ''){
    async function addData(){
      const res = await Axios.post(url + '/products', data)
      console.log(res);
      props.addNewProduct(data)
      setEmail('');
      setName('');
      setNumber('');
      setPrice('');
      setProduct('');
      setInfo('');
      setImage('');
    }addData();
  }
}
    


  return (
   
    
    <div >
      {/* <Header /> */}
        <Container className=" w-50 mb-5 bg-light">
          <h1 style={{marginTop:"100px"}}>Добавить новый продукт</h1>
          <MDBDropdown>
              <MDBDropdownToggle caret color="primary">
                {category || "Выберите категорию"}
              </MDBDropdownToggle>
              <MDBDropdownMenu className="bg-success" color="success" basic>
                <MDBDropdownItem onClick={()=>setCategory("cake")}>Торты</MDBDropdownItem>
                <MDBDropdownItem onClick={()=>setCategory("pastries")}>Пирожное</MDBDropdownItem>
                <MDBDropdownItem onClick={()=>setCategory("donuts")}>Пироги</MDBDropdownItem>
                <MDBDropdownItem onClick={()=>setCategory("pies")}>Пончики</MDBDropdownItem>
                <MDBDropdownItem onClick={()=>setCategory("croissants")}>Круассаны</MDBDropdownItem>
                <MDBDropdownItem onClick={()=>setCategory("biscuits")}>Печенье</MDBDropdownItem>
                <MDBDropdownItem onClick={()=>setCategory("icecreams")}>Морожное</MDBDropdownItem>
                <MDBDropdownItem onClick={()=>setCategory("cheescake")}>Чизкейки</MDBDropdownItem>
                <MDBDropdownItem divider />
                <MDBDropdownItem>Separated link sdgtfbrtc</MDBDropdownItem>
              </MDBDropdownMenu>
           </MDBDropdown>
           
      <Form  onSubmit={(e)=>addProduct(e)}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input 
        value={name} 
        onChange={(e)=> setName(e.target.value)} 
        type="name" name="name" id="name" placeholder="Enter your Name" />
      </FormGroup>
      <FormGroup>
        <Label for="number">Number</Label>
        <Input 
        value={number} 
        onChange={(e)=> setNumber(e.target.value)}
         type="number" name="number" id="number" placeholder="Enter your Number" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
         value={email}
          onChange={(e)=> setEmail(e.target.value)}
           type="email" name="email" id="exampleEmail" placeholder="Enter Your Email" />
      </FormGroup>
      <FormGroup>
        <Label for="Product Name">Product Name</Label>
        <Input 
        value={product} 
        onChange={(e)=> setProduct(e.target.value)} 
        type="text" name="product" id="Product Name" placeholder="Enter the Product Name" />
      </FormGroup>
      <FormGroup>
        <Label for="price">Price</Label>
        <Input 
        value={price}
         onChange={(e)=> setPrice(e.target.value)} 
         type="text" name="price" id="price" placeholder="Enter the Price" />
      </FormGroup>
      <FormGroup>
        <Label for="info">Product Info</Label>
        <Input 
        value={info}
         onChange={(e)=> setInfo(e.target.value)} 
         type="text" name="info" id="info" placeholder="Enter the Product Information" />
      </FormGroup>
      <FormGroup>
        <Label for="image">Image URL</Label>
  
        <Input 
        value={image}
         onChange={(e)=> setImage(e.target.value)} 
         type="text" required name="image" id="image" placeholder="Enter the Image URL" />
      </FormGroup>

      {/* <FormGroup>

        <Label for="exampleFile">File</Label>
        <Input
        value={image}
        onChange={(e)=> setImage(e.target.value)} 
         type="file" name="file" id="exampleFile" />
       
      </FormGroup> */}
      
      <Button type="submit" color="primary" >Добавить</Button>
     
    </Form>

    </Container>
   
       
   <div>
     <FooterPagePro/>
   </div>
    </div>
    
    
  
    
  )
}

export default connect(null, {addNewProduct})(NewProduct) 
