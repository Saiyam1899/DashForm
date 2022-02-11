import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  BsCardImage,
  BsDiscord,
  BsGithub,
  BsInstagram,
  BsTelegram,
  BsTwitter,
} from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
export default function SocialForm() {
  return (
    <Container>
      <h1>Add Additonal info</h1>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>
              <BsCardImage className="mx-2" /> <b>Logo Url*</b>
            </Form.Label>
            <Form.Control placeholder="Ex:https://.." />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>
              <BsGlobe className="mx-2" />
              <b>Website*</b>
            </Form.Label>
            <Form.Control type="text" placeholder="Ex:https://.." />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>
              <b>Category</b>
            </Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>
              <b>Industry</b>
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
              <BsFacebook className="mx-2" />
              <b>Facebook</b>
            </Form.Label>
            <Form.Control placeholder="Ex:https://facebook.com/..." />
          </Form.Group>{" "}
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>
              <BsTwitter className="mx-2" />
              <b>Twitter</b>
            </Form.Label>
            <Form.Control placeholder="Ex:https://twitter.com/..." />
          </Form.Group>{" "}
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>
              <BsGithub className="mx-2" />
              <b>Github</b>
            </Form.Label>
            <Form.Control placeholder="Ex:https://Github.com/..." />
          </Form.Group>{" "}
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>
              <BsTelegram className="mx-2" />
              <b>Telegram</b>{" "}
            </Form.Label>
            <Form.Control placeholder="Ex:https://t.me/..." />
          </Form.Group>{" "}
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>
              <BsInstagram className="mx-2" />
              <b>Instagram</b>
            </Form.Label>
            <Form.Control placeholder="Ex:https://instagram.com/..." />
          </Form.Group>{" "}
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>
              <BsDiscord className="mx-2" />
              <b>Discord</b>
            </Form.Label>
            <Form.Control placeholder="Ex:https://t.me/..." />
          </Form.Group>{" "}
        </Row>
        <Row>
          <Form.Label>
            <b>Description</b>
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
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
