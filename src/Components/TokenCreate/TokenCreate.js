import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./token.css";

export default function TokenCreate() {
  return (
    <Container>
      <Form>
        <div className="upper">
          <Form.Label>Token Address</Form.Label>
          <Button variant="secondary" style={{borderRadius:"30px"}}>Create Token</Button>
        </div>
        <Form.Control />
        <p>Create Presale fee 0.5 BNB</p>
        <div className="upper">
          <Form.Label>
            <b>Name</b>
          </Form.Label>
          <p>ABH</p>
        </div>
        <div className="upper">
          <Form.Label>
            <b>Symbol</b>
          </Form.Label>
          <p>ABH</p>
        </div>
        <div className="upper">
          <Form.Label>
            <b>Decimals</b>
          </Form.Label>
          <p>18</p>
        </div>
        <Button variant="secondary" style={{borderRadius:"30px"}}>Next</Button>
      </Form>
    </Container>
  );
}
