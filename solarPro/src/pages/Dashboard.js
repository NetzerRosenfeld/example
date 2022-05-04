import React from "react";
import { Col, Container, Form, Pagination, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Header btn={"LOG OUT"} />

      <Container>
        <h1 className="py-5 font-weight-bold">ALL PROJECTS</h1>
        <Form>
          <Row>
            <Col md={2}>
              <Form.Select className="select">
                <option>DATE</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col md={2}>
              <Form.Select className="select">
                <option>ROOF TYPE</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col md={2}>
              <Form.Select className="select">
                <option>TYPE OF CONSTRUCTION</option>
                <option>
                  <Form>
                    <Form.Check type="checkbox" label="T90" />
                  </Form>
                </option>

                <Form.Check type="checkbox" label="T0" />
                <Form.Check type="checkbox" label="RF1" />
              </Form.Select>
            </Col>
            <Col md={2}></Col>
            <Col md={2}></Col>
            <Col md={2}>
              <Link to='/create'>
                <button className="login-btn text-white">
                   ADD NEW PROJECT +
                </button>
              </Link>
            </Col>
          </Row>
        </Form>
        {/*                      TABLE                                */}
        <Table responsive className="my-5">
          <thead>
            <tr>
              <th>NR</th>
              <th>DATE</th>
              <th>ROOF TYPE</th>
              <th>TYPE OF CONSTRUCTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>20/12/2021</td>
              <td>ROOFS CAN BE EASILY ZIPPED</td>
              <td>KZX</td>
              <td>
                <button
                  style={{
                    border: "none",
                    width: "30px",
                    background: "transparent",
                  }}
                >
                  ...
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>12/11/2021</td>
              <td>LOCAKABLE ROOFS</td>
              <td>SXP</td>
              <td>
                <button
                  style={{
                    border: "none",
                    width: "30px",
                    background: "transparent",
                  }}
                >
                  ...
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>29/10/2021</td>
              <td>METAL ROOFS</td>
              <td>MTR</td>
              <td>
                <button
                  style={{
                    border: "none",
                    width: "30px",
                    background: "transparent",
                  }}
                >
                  ...
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
        {/*                           TABLE                         */}
        {/*                           PAGINATION                         */}
        <Row>
          <Pagination className="d-flex justify-content-center align-items-center">
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{15}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </Row>
        {/*                           PAGINATION                         */}
      </Container>
    </div>
  );
};

export default Dashboard;
