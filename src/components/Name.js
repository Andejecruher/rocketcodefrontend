import React, {Fragment} from 'react';
import $ from 'jquery';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { useSessionStorage } from '../useSessionStorage';

function Name(props) {
    const [name, setName] = useSessionStorage('name', '');
    const [second_name, setSecondName] = useSessionStorage('second_name', '');
    const [last_name, setLastName] = useSessionStorage('last_name', '');
    const [mothers_last_name, setMothersLastName] = useSessionStorage('mothers_last_name', '');
    let fullName = `${name} ${second_name} ${last_name} ${mothers_last_name}`;
    const handleKeyPress = (event) =>{
        if(event.key === 'Enter'){
            $('#birthDate').toggle('fast');
            var posicion = $("#birthDate").offset().top;
            $("html, body").animate({
                scrollTop: posicion
              }, 1800);
        }
    }
    return (
        <Fragment>
          <Card style={{ width: '100%'}}>
            <Card.Body>
              <Card.Title><Image style={{ margin: '10px 50px 0 30px', float: 'left' }}  width={80} height={80} alt="avatar" src="boot.png"></Image><p style={{ fontSize: '1.2em', padding: '1.5em' }}>¿ Cúal es tu nombre ?</p></Card.Title>
              <Card.Text>
                <Form>
                    <Form.Group className="mb-3 pl-3">
                        <Form.Control required name="name" type="text" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3 pl-3">
                        <Form.Control required name="second_name" type="text" placeholder="Segundo Nombre" value={second_name} onChange={e => setSecondName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3 pl-3">
                        <Form.Control required name="last_name" type="text" placeholder="Apellido Paterno" value={last_name} onChange={e => setLastName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3 pl-3">
                        <Form.Control required name="mothers_last_name" type="text" placeholder="Apellido Materno" value={mothers_last_name} onKeyPress={(e) => handleKeyPress(e)} onChange={e => setMothersLastName(e.target.value)}/>
                    </Form.Group>
                </Form>
              </Card.Text>
            </Card.Body>
            <Card.Footer style={{ backgroundColor: '#0d6efd', fontSize:'1em' }} className="text-left text-white"><p>{fullName}</p></Card.Footer>
          </Card>
        </Fragment>
    );
}

export default Name;