import React, { useState } from "react";
import "../styles/steps.css";
import { Col, Container, Row, Modal } from "react-bootstrap";
import Header from "../components/Header";
import Step1 from "../components/steps/1-RoofSelection";
import Step2 from "../components/steps/2-DrawRoof";
import Step3 from "../components/steps/3-ModalData";
import Step4 from "../components/steps/4-AddFastner";
import Step5 from "../components/steps/5-Accommodation";
import Step6 from "../components/steps/6-Construction";
import Step7 from "../components/steps/7-Comments";
import Step8 from "../components/steps/8-Table";

const Create = () => {
  const [active, setActive] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Header btn={"LOG OUT"} steps={true} activeStep={active} />
      <Container>
        {active === 0 && <Step1 />}
        {active === 1 && <Step2 />}
        {active === 2 && <Step3 />}
        {active === 3 && <Step4 />}
        {active === 4 && <Step5 />}
        {active === 5 && <Step6 />}
        {active === 6 && <Step7 />}
        {active === 7 && <Step8 />}

        <Row className="my-5">
          <Col>
            {active === 7 ? (
              <button
                className="btn-next pl-auto"
                onClick={() => setModalShow(true)}
              >
                Save
              </button>
            ) : (
              <button
                className="btn-next pl-auto"
                onClick={() => setActive(active + 1)}
              >
                Next
              </button>
            )}
            &nbsp;&nbsp;&nbsp;
            {active !== 0 && (
              <button
                className="back-btn"
                onClick={() => setActive(active - 1)}
              >
                Back
              </button>
            )}
          </Col>
        </Row>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    </div>
  );
};

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <b>!Your project is ready</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ marginLeft: "auto", marginRight: "auto" }}>
          <button className="back-btn">Download PDF</button>
          &nbsp;&nbsp;&nbsp;
          <button className="btn-signin px-5">Share</button>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default Create;
