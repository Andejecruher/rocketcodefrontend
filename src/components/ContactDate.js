import React, { Fragment } from 'react';
import axios from 'axios';
import $ from 'jquery';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSessionStorage } from '../useSessionStorage';

function ContactDate(props) {
  const [email, setEmail] = useSessionStorage('email', '');
  const [phone, setPhone] = useSessionStorage('phone', '');
  let birthDateSession = sessionStorage.getItem('year')+'-'+sessionStorage.getItem('month')+'-'+sessionStorage.getItem('day');
  let emailSession = sessionStorage.getItem('email');
  let phoneSession = sessionStorage.getItem('phone');
  let fullNameSession = sessionStorage.getItem('name')+' '+sessionStorage.getItem('second_name')+' '+sessionStorage.getItem('last_name')+' '+sessionStorage.getItem('mothers_last_name');
  const handleKeyPress = (event) =>{
      if(event.key === 'Enter'){
        $('#sendDateApi').toggle('slow');
        $("html, body").animate({
          scrollTop: 10000
        }, 1800);
      }
  }
  const sendApi = () => {
    axios.post('http://localhost:3050/users/add', {
      name: sessionStorage.getItem('name'),
      second_name: sessionStorage.getItem('second_name'),
      last_name: sessionStorage.getItem('last_name'),
      mothers_last_name: sessionStorage.getItem('mothers_last_name'),
      birth_date: sessionStorage.getItem('year')+'-'+sessionStorage.getItem('month')+'-'+sessionStorage.getItem('day'),
      email: sessionStorage.getItem('email'),
      phone: sessionStorage.getItem('phone')
    })
    .then(function (response) {
      console.log(response);
      sessionStorage.clear();
    })
    .catch(function (error) {
      console.log(error);
      sessionStorage.clear();
    });
      
  }
  
  return (
  <Fragment>
    <Card id="contactDate" style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title><Image style={{ margin: '10px 50px 0 30px', float: 'left' }}  width={80} height={80} alt="avatar" src="boot.png"></Image><p style={{ fontSize: '1.2em', padding: '1.5em' }}>¿ Cúales son tus datos de contacto ?</p></Card.Title>
        <Card.Text>
          <Form>
              <Form.Group className="mb-3 pl-3">
                  <Form.Control name="email" type="email" placeholder="Correo Electronico" onChange={event => setEmail(event.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3 pl-3">
                  <Form.Control name="phone" type="text" placeholder="Télefono Celular" onChange={event => setPhone(event.target.value)} onKeyPress={(e) => handleKeyPress(e)}/>
              </Form.Group>
          </Form>
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{ backgroundColor: '#0d6efd', fontSize:'1em' }} className="text-left text-white">
          <p>Correo : {email}</p>
          <p>Télefono : {phone}</p>
      </Card.Footer>
    </Card>
    <Card id="sendDateApi" style={{ width: '100%'}} className="sendDateApi">
      <Card.Body>
        <Card.Title className="text-center">Si tus datos son correctos continuemos !</Card.Title>
        <Card.Text className="d-grid gap-2">
          <Button size="lg" variant="info" onClick={sendApi}>Iniciar</Button>
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{ backgroundColor: '#0d6efd', fontSize:'1em' }} className="text-left text-white">
          <p>Fecha De Nacimiento : {birthDateSession} </p>
          <p>Correo : {emailSession}</p>
          <p>Télefono : {phoneSession}</p>
          <p>Nombre : {fullNameSession}</p>
      </Card.Footer>
    </Card>
  </Fragment>
);
}

export default ContactDate;