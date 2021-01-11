import React from "react"
import { Form, Button } from "react-bootstrap"
import PrimaryLayout from "../layouts/PrimaryLayout"

export default () => (
  <PrimaryLayout
    columnSize="10"
    padding="pt-5"
    addClass="justify-content-md-center"
  >
    <h1>Contacts</h1>
    <Form>
      <Form.Group controlId="contactForm.Email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email..." />
      </Form.Group>
      <Form.Group controlId="contactForm.Subject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="subject...." />
      </Form.Group>
      <Form.Group controlId="contactForm.Message">
        <Form.Label>Text</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group controlId="contactForm.Submit">
        <Button>Send</Button>
      </Form.Group>
    </Form>
  </PrimaryLayout>
)
