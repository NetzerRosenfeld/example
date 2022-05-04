import { TextField } from "@mui/material";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Step6 = () => {
  return (
    <div>
      <h2 className="py-5 mt-5">Start of construction</h2>
      <Row className="text-center mb-5 pb-5">
        <Col>
          <h4 className="py-3 text-right">Basic profiles</h4>

          <div className="py-3 d-flex flex-row-start">
            <TextField
              id="outlined-basic"
              label="Length of the entire base profile"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Full Profile Length"
              variant="outlined"
              className="mx-4"
            />
            <TextField
              id="outlined-basic"
              label="Full Profile Multiplier"
              variant="outlined"
            />
          </div>
          <div className="mb-5 d-flex flex-row-start">
            <TextField
              id="outlined-basic"
              label="Remaining length"
              variant="outlined"
            />
          </div>

          <h4 className=" py-2 text-right">Discontinuous baseline profile</h4>

          <div className="d-flex flex-row-start">
            <TextField
              id="outlined-basic"
              label="base profile length"
              variant="outlined"
            />
          </div>
          {/*                     */}
        </Col>
        <Col>
          <DiagramComponent
            id="diagram"
            width={"100%"}
            rulerSettings={{ showRulers: true }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Step6;
