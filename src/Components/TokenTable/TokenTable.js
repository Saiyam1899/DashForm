import React from "react";
import { Button, Container, Table } from "react-bootstrap";

export default function TokenTable() {
  return (
    <Container className="py-2">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ display: "flex" }}>
          <Button
            className="my-2"
            variant="secondary"
            style={{ borderRadius: "50px" }}
          >
            View Trasactions
          </Button>
          <Button
            className="mx-2 my-2"
            variant="secondary"
            style={{ borderRadius: "50px" }}
          >
            Import Token
          </Button>
          <Button
            className="my-2"
            variant="secondary"
            style={{ borderRadius: "50px" }}
          >
            Create Launchpad
          </Button>
        </div>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr></tr>
        </thead>
        <tbody>
          <tr>
            <td>Creation Successfull</td>
            <td>True</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>ABH</td>
          </tr>
          <tr>
            <td>Symbol</td>
            <td>ABH</td>
          </tr>
          <tr>
            <td>Decimals</td>
            <td>18</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>0xyguyeg1345jdf</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
