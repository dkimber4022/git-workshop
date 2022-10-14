import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const AddCounter = ({ addCounter }) => {
  const [name, setName] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    addCounter({"name": name, "count": 0});
  }

  const handleChange = event => {
    setName(event.target.value);
  }

  return (
    <Card style={{paddingTop: '1rem', margin: '2rem', }}>
      <Card.Title>
        Create Counter
      </Card.Title>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formCounterTitle">
            <Form.Label>Counter Title</Form.Label>
            <Form.Control type="text" placeholder="Counter Title" value={name} onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default AddCounter;
