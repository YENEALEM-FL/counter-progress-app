import React from "react";
import { Col, Container, Progress, Button, Row, Input } from "reactstrap";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function SimpleCounter() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-custom vh-100">
      <Container fluid>
        <Row className="justify-content-center">
          <p className="custom-font"> Progress Bar</p>

          <Col sm="9" md="6" lg="6">
            <Progress
              color="orange"
              className="my-4 custom-progress rounded-pill"
              value={10}
            >
              10%
            </Progress>
          </Col>

          <Col sm="9" className="">
            <Row xs={3} className="justify-content-center align-items-center">
              <Col className="text-end">
                <Button
                  className="bg-light text-dark border-0 custom-btn rounded-circle me-2"
                  size="sm"
                >
                  <FaPlus />
                </Button>{" "}
                Increament
              </Col>

              <Col sm="2" className="text-end">
                <Input
                  type="number"
                  className="custom-form mx-auto"
                  max="100"
                  maxLength="3"
                />
              </Col>
              <Col className="text-start">
                <Button
                  className="bg-light text-dark border-0 custom-btn rounded-circle me-2"
                  size="sm"
                >
                  <FaMinus />
                </Button>{" "}
                Decreament
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SimpleCounter;
