import React from "react";
import { Col, Row } from "react-bootstrap";
import data from "../roofData.json";

const Step1 = () => {
  return (
    <div>
      <h2 className="py-5 mt-5">Choose your roof type</h2>
      <Row className="text-center mb-5 pb-5">
        {data.map((el, ind) => {
          return (
            <Col
              lg={2}
              md={6}
              xs={12}
              // className={selected ? "selected" : ""}
              // onClick={() => alert("Clicked!")}
            >
              <img src={el.image} alt="tiled" className="ml-auto mr-auto" />
              <p className="py-4 w-100 text text-center">{el.title}</p>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Step1;
