import { TextField } from "@mui/material";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Step4 = () => {
  return (
    <div>
      <h2 className="py-5">Adding Fastner</h2>
      <Row className="text-center mb-5 pb-5">
        
        <Col>
          <h4 className="py-3 text-right">
            Activate the side from which we will begin to count the size and
            size of fastners
          </h4>
          <div className="py-3 d-flex flex-row-start">
            <TextField
              id="outlined-basic"
              label="Number of fastners"
              variant="outlined"
            />
          </div>
          {/*                    */}
          <h4 className="text-right">Mark the boundries of the fastners</h4>
          <p className="text-right text-grey">start on the side you marked</p>
          <div className="py-3 d-flex flex-row-start">
            <TextField
              id="outlined-basic"
              label="Between 1-2"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Between 2-3"
              variant="outlined"
              className="mx-4"
            />
            <TextField
              id="outlined-basic"
              label="Between 3-4"
              variant="outlined"
            />
          </div>
          {/*                     */}
          <h4 className="text-right">Panel dimensions</h4>
          <div className="py-3 d-flex flex-row-start">
            <TextField
              id="outlined-basic"
              label="Length in mm"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Width in mm"
              variant="outlined"
              className="mx-4"
            />
            <TextField
              id="outlined-basic"
              label="Thickness in mm"
              variant="outlined"
            />
          </div>
          <div className="py-3 d-flex flex-row-start">
            <TextField
              id="outlined-basic"
              label="Power in Watt"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="High above sea level"
              variant="outlined"
              className="mx-4"
            />
          </div>
          {/*                     */}
        </Col>
        <Col>
          <DiagramComponent
            id="diagram"
            width={"100%"}
            height={'100%'}
            rulerSettings={{ showRulers: true }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Step4;
