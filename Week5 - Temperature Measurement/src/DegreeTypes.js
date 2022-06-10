import React, { Component } from 'react'
import {Row, Col,} from 'reactstrap';

class DegreeTypes extends Component {
  constructor(props){
      super(props);
          this.state={
                degreeTypes: [
                {degreeId:1, degreeName:"Celsius"},
                {degreeId:2, degreeName:"Fahrenheit"},
                {degreeId:3, degreeName:"Kelvin"}
            ],
      };
  }  

    render() {
    return (
      <div>
          <h3>Temperature conversion in 3 different measuring units</h3>
                <Row>
                    {this.state.degreeTypes.map(degreeType=>(
                    <Col key={degreeType.degreeId}><b>{degreeType.degreeName}</b></Col>
                ))}
                </Row>          
      </div>
    );
  }
}
export default DegreeTypes;
