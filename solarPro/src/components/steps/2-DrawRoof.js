import React from "react";
import { Row } from "react-bootstrap";
import "../../App.css";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";

const Step2 = () => {
  return (
    <Row className="my-5">
      <h2 className="py-5">Draw the roof</h2>
      <div className="d-flex flex-row-reverse">
      <DiagramComponent
        id="diagram"
        width={"100%"}
        height={"400px"}
        rulerSettings={{ showRulers: true }}
      />
      </div>
    </Row>
  );
};

export default Step2;
