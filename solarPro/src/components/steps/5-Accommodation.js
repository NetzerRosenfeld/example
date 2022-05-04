import { Button, TextField } from "@mui/material";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Step5 = () => {
  return (
    <div>
      <h2 className="py-5 mt-5">Accomodation Plan</h2>
      <Row className="text-center mb-5 pb-5">
        <Col>
          <h4 className="py-3 text-right">Line type</h4>
          <div className="py-3 d-flex flex-row-start">
            <Button
              className="mx-2"
              color="warning"
              variant="outlined"
              labelStyle={{ fontSize: "63px" }}
            >
              1 Vertical panel
            </Button>
            <Button className="mx-2" color="warning" variant="outlined">
              1 Horizontal panel
            </Button>
            <Button className="mx-2" color="warning" variant="outlined">
              Top Vertical
              <br /> and bottom Horizontal
            </Button>
          </div>
          <div className="py-3 d-flex flex-row-start">
            <Button className="mx-2" color="warning" variant="outlined">
              2 Vertical and 1 Bottom Horizontal
            </Button>
            <Button className="mx-2" color="warning" variant="outlined">
              2 Vertical and 1 <br /> Bottom Horizontally in the middle
            </Button>
            <Button className="mx-2" color="warning" variant="outlined">
              2 Vertical and 1 upper horizontal
              <br /> and bottom Horizontal
            </Button>
          </div>
          {/*                    */}
          <h4 className="text-right">
            If the model has a proportional roof section
          </h4>

          <div className="py-3 d-flex flex-row-start">
            <TextField
              id="outlined-basic"
              label="Elevation column height mm"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Angel of a triangle in a row"
              variant="outlined"
              className="mx-4"
            />
          </div>
          <h4 className="text-right">
            If the model has a triangle
          </h4>

          <div className="py-3 d-flex flex-row-start">
            <TextField
              id="outlined-basic"
              label="Front leg height"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Edge height from the center profile"
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
            rulerSettings={{ showRulers: true }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Step5;
