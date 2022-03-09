import React from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ; 
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Card from 'react-bootstrap/Card';
import { BsFillCalendarEventFill, BsFillAlarmFill } from "react-icons/bs";
import Name from './components/Name';
import BirthDate from './components/BirthDate';
import ContactDate from './components/ContactDate';

function App() {
  return (
    <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <Card bg="primary" style={{ width: '100%', color: 'white' }}>
        <Card.Body>
          <Card.Title>Technical Challenge  <BsFillCalendarEventFill style={{ float: 'right', fontSize: '5em', }}></BsFillCalendarEventFill> </Card.Title>
          <Card.Text style={{ marginTop: '7%' }}>
            <BsFillAlarmFill></BsFillAlarmFill> Responde en menos de 5 minutos.
          </Card.Text>
        </Card.Body>
      </Card>
      <Name display="block"/>
      <BirthDate display="block"/>
      <ContactDate display="block"/>
    </ThemeProvider>
  );
}
export default App;
