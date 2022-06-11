import { Button, Container, Row, Col } from "reactstrap";
import DegreeTypes from "./DegreeTypes";
import React, {Component} from "react";
import Celsius from "./Celsius"
import Fahrenheit from "./Fahrenheit"
import Kelvin from "./Kelvin"

export default class App extends Component {
  constructor(props){
    super(props);
        this.state={
          temperature:0,
    };
}
  inc=()=>
  {
    this.setState({temperature:this.state.temperature+1});
  }
  render(){
  return (
    <div>
      <Container><br/><br/>
      <h3>How is the weather today?</h3><br/>
      <h5>Weather is  {this.state.temperature} degree.</h5><br/>
      <Button outline color="danger" onClick={()=>this.inc()}>increase the temperature</Button><br/><br/>
      <DegreeTypes/>
      <Row>
        <Col>
          <Celsius temp={this.state.temperature}></Celsius>
        </Col>
        <Col>
          <Fahrenheit temp={this.state.temperature*1.8+32}></Fahrenheit>
        </Col>
        <Col>
          <Kelvin temp={this.state.temperature+273.15}></Kelvin>
        </Col>
      </Row>
      </Container>
      
    </div>
  );
}
}
