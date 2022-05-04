import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
import React from "react";
import { Row, Col } from "react-bootstrap";

const Step7 = () => {
  return (
    <div>
      <h2 className="py-5 mt-5">Comments</h2>
      <Row className="mb-5 pb-5" style={{textAlign:'left'}}>
        <Col>
          <Row>
            <p>
              <h4 className="text-orange">D</h4>
              Line type - wx
              
            </p>
          </Row>
          <Row>
            <p>
              <h4 className="text-orange">E</h4>
              Line type - wx
              
            </p>
          </Row>
          <Row>
            <p>
              <h4 className="text-orange">F</h4>
              Line type - wx
              
            </p>
          </Row>
        </Col>
        <Col className='mx-4 px-5'>
          <DiagramComponent
            id="diagram"
            width={"100%"}
            height={"300px"}
            rulerSettings={{ showRulers: true }}
          />
        </Col>
        <Col style={{textAlign: 'left'}}>
          <Row>
            <p>
              <h4 className="text-orange">A</h4>
              Line type - wx
              
            </p>
          </Row>
          <Row>
            <p>
              <h4 className="text-orange">B</h4>
              Line type - wx
              
            </p>
          </Row>
          <Row>
            <p>
              <h4 className="text-orange">C</h4>
              Line type - wx
              
            </p>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Step7;
