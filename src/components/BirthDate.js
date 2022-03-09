import React, { Fragment } from 'react';
import $ from 'jquery';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { useSessionStorage } from '../useSessionStorage';
function BirthDate(props) {
  const [day, setDay] = useSessionStorage('day', '');
  const [month, setMonth] = useSessionStorage('month', '');
  const [year, setYear] = useSessionStorage('year', '');
  let birthDate= `${day} - ${month} - ${year}`;
  const handleKeyPress = (event) =>{
      if(event.key === 'Enter'){
        $('#contactDate').toggle('slow');
        var posicion = $("#contactDate").offset().top;
        $("html, body").animate({
          scrollTop: posicion
        }, 1800);
      }
  }
  return (
    <Fragment>
      <Card id="birthDate" className="birthDate" style={{ width: '100%'}}>
        <Card.Body>
          <Card.Title><Image style={{ margin: '10px 50px 0 30px', float: 'left' }}  width={80} height={80} alt="avatar" src="boot.png"></Image><p style={{ fontSize: '1.2em', padding: '1.5em' }}>¿ Cúal es tu fecha de nacimiento ?</p></Card.Title>
          <Card.Text>
            <Form>
                <Form.Group className="mb-3 pl-3">
                    <Form.Control name="day" type="text" placeholder="Dia" value={day} onChange={event => setDay(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3 pl-3">
                    <Form.Control name="month" type="text" placeholder="Mes" value={month} onChange={event => setMonth(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3 pl-3">
                    <Form.Control name="year" type="text" placeholder="Año" value={year} onKeyPress={(e) => handleKeyPress(e)} onChange={event => setYear(event.target.value)}/>
                </Form.Group>
            </Form>
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: '#0d6efd', fontSize:'1em' }} className="text-left text-white"><p>{birthDate}</p></Card.Footer>
      </Card>
    </Fragment>
  );
}

export default BirthDate;