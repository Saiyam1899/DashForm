import React from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import "./form.css";

export default function FormComplex() {
  return (
    <Container>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>
              {" "}
              <b>Presale Rate *</b>
            </Form.Label>
            <Form.Control type="text" placeholder="100" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Whitelist</Form.Label>
          <Form.Check type="switch" id="custom-switch" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>
              <b> Contribution token *</b>
            </Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>
              <b>Referral*</b>
            </Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>
              <b>SoftCap (BNB)*</b>
            </Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>
              <b>HardCap (BNB)*</b>
            </Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>
              <b>Minimum Buy (BNB)*</b>
            </Form.Label>
            <Form.Control />
          </Form.Group>{" "}
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>
              <b>Maximum Buy (BNB)*</b>{" "}
            </Form.Label>
            <Form.Control />
          </Form.Group>{" "}
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>
              <b>Refund Type</b>
            </Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>{" "}
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>
              <b>Router*</b>{" "}
            </Form.Label>
            <Form.Select
              defaultValue="Choose..."
              style={{ borderRadius: "50px !important" }}
            >
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>{" "}
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>
              <b>Liquidity(%)*</b>
            </Form.Label>
            <Form.Control />
          </Form.Group>{" "}
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>
              <b>Listing Rate*</b>
            </Form.Label>
            <Form.Control />
          </Form.Group>{" "}
        </Row>
        <Form.Group className="mb-3" id="formGridCheckbox">
          Enter the percentage of raised funds that should be allocated to
          Liquidity on (Min 51%,Max 100%)
          <br />
          If i spend 1 BNB on how many tokens i will recieve? Usually this
          amount is lower than presale rate to allow for a higher listing prices
          on
        </Form.Group>
        <Row>
          <h3>Select Start time & end time(UTC)</h3>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>
              <b>Start Time (UTC)</b>
            </Form.Label>
            <Form.Control type="time" />
          </Form.Group>{" "}
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>
              <b>End Time (UTC)</b>
            </Form.Label>
            <Form.Control type="time" />
          </Form.Group>{" "}
        </Row>
        <Row>
          <Form.Group controlId="formGridZip">
            <Form.Label>
              <b>Liquidity Lock</b>
            </Form.Label>
            <Form.Control />
          </Form.Group>{" "}
        </Row>
        <Button
          variant="primary"
          type="submit"
          className="my-2"
          style={{ borderRadius: "50px" }}
        >
          Back
        </Button>
        <Button
          variant="primary"
          type="submit"
          className="mx-2"
          style={{ borderRadius: "50px" }}
        >
          Next
        </Button>
      </Form>
    </Container>
  );
}
