import React, { useState } from "react";
import { Col, Container, Progress, Button, Row, Input } from "reactstrap";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function FunctionalCounter() {
  const [count, setCount] = useState(0);

  console.log("count: ", count);

  const Increament = () => {
    if (count < 100) setCount(count + 1);
  };

  const Decreament = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleInputChange = (e) => {
    // const value = e.target.value === "" ? "" : Number(e.target.value);

    // if (value === "" && value > 0 && value <= 100) setCount(value);
    // console.log("value: ", value);

    const value = e.target.value;
    if (value === "") {
      setCount(value);
      return;
    }

    const newValue = Number(e.target.value);

    if (newValue >= 0 && newValue <= 100) {
      setCount(newValue);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-custom vh-100">
      <Container fluid>
        <Row className="justify-content-center">
          <p className="custom-font"> Progress Bar</p>

          <Col sm="9" md="6" lg="6">
            <Progress
              color="orange"
              className="my-4 custom-progress rounded-pill"
              value={count}
              min="0"
              max="100"
            >
              {count}%
            </Progress>
          </Col>

          <Col sm="9" className="">
            <Row xs={3} className="justify-content-center align-items-center">
              <Col className="text-end">
                <Button
                  className="bg-light text-dark border-0 custom-btn rounded-circle me-2"
                  size="sm"
                  onClick={Increament}
                  value={count}
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
                  min="0"
                  maxLength="3"
                  onChange={handleInputChange}
                />
              </Col>
              <Col className="text-start">
                <Button
                  className="bg-light text-dark border-0 custom-btn rounded-circle me-2"
                  size="sm"
                  onClick={Decreament}
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

export default FunctionalCounter;
