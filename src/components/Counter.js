import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Counter = ({counter, add}) => {

  const handleAdd = () => {
    add(counter);
  }

  return (
    <Card style={{ width: '18rem',  margin: '2rem', }}>
      <Card.Body>
        <Card.Title>{counter.name}</Card.Title>
        <Card.Text>
          {counter.count}
        </Card.Text>
       <Button variant="primary" onClick={handleAdd}>+</Button>
      </Card.Body>
    </Card>
  );
}

export default Counter;
