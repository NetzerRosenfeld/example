import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
import React from "react";
import { Col, Row } from "react-bootstrap";
import wx from "../../assets/images/WX.png";
import w0 from "../../assets/images/W0.png";
import { TextField } from "@mui/material";

const Step3 = () => {
  return (
    <div>
      <h2 className="py-5">Modal Data</h2>
      <Row className="mb-5 pb-5">
        
        <Col>
          <h3 className="py-3">Model type</h3>
          <div>
            <img
              src={wx}
              alt="wx"
              width={200}
              height={150}
              className="mx-3 border"
              style={{ cursor: "pointer" }}
            />
            <img
              src={w0}
              alt="w0"
              width={200}
              height={150}
              className="mx-3 border"
              style={{ cursor: "pointer" }}
            />
          </div>

          <h4 className="py-3">?How much weight is used in the system</h4>
          <div>
            <TextField
              id="outlined-basic"
              label="weight in kg"
              variant="outlined"
            />
          </div>
          {/*                    */}
          <h4 className="py-3">
            ?How many kilograms per square meterof the panel
          </h4>
          <div>
            <TextField
              id="outlined-basic"
              label="Insert the number"
              variant="outlined"
            />
          </div>
          {/*                     */}
        </Col>
        <Col>
          <DiagramComponent
            id="diagram"
            width={"100%"}
            height={"400px"}
            rulerSettings={{ showRulers: true }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Step3;
