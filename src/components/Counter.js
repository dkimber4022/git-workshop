import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Counter = ({counter, add, remove }) => {

  const handleAdd = () => {
    add(counter);
  }

  const handleRemove = () => {
    remove(counter);
  }

  return (
    <Card style={{ width: '18rem',  margin: '2rem', }}>
      <Card.Body>
        <Card.Title>{counter.name}</Card.Title>
        <Card.Text>
          {counter.count}
        </Card.Text>
       <Button variant="primary" onClick={handleAdd} style={{ margin: '.5rem', }}>+</Button>
       <Button variant="danger" onClick={handleRemove} style={{ margin: '.5rem', }}>x</Button>
      </Card.Body>
    </Card>
  );
}

export default Counter;
