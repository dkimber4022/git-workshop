import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Counter = () => {
  const [name, setName] = useState("Example Counter");
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {count}
        </Card.Text>
        <Button variant="primary" onClick={addCount}>+</Button>
      </Card.Body>
    </Card>
  );
}

export default Counter;
