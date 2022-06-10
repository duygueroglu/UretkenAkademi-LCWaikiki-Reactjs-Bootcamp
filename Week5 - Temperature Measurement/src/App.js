import { Button, Container, Row, Col } from "reactstrap";
import DegreeTypes from "./DegreeTypes";
import React, {useState} from "react";

function App() {
  const [count, setCount]=useState(0);
  const [count2, setCount2]=useState(0);
  const [count3, setCount3]=useState(0);
  const inc=()=>{
    setCount(count+1);
    setCount2(count*1.8+32);
    setCount3(count+273.15);
  }

  return (
    <div>
      <Container><br/><br/>
      <h3>How is the weather today?</h3><br/>
      <h5>Weather is {count} centigrade degree.</h5><br/>
      <Button outline color="danger" onClick={inc}>increase the temperature</Button><br/><br/>
      <DegreeTypes/>
      <Row>
        <Col>
        {count}
        </Col>
        <Col>
        {count2}
        </Col>
        <Col>
        {count3}
        </Col>
      </Row>
      </Container>
      
    </div>
  );
}

export default App;
