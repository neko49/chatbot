import React from 'react';
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";

function Sidebar() {
  const rooms = ['first room', 'second room', 'third room']
  return (
    <>
      <h2>Chat Disponible</h2>
      <ListGroup>
        {rooms.map((room, idx) => (
          <ListGroupItem key={idx}>
            {room}
          </ListGroupItem>
        ))}
      </ListGroup>
      <h2>Membres</h2>
    </>
  )
}

export default Sidebar