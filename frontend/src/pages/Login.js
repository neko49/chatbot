import { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleLogin(e) {
    e.preventDefault();

  }
  return (
    <Container>
      <Row>
        <Col md={5} className='login__bg'></Col>
        <Col md={7} className='d-flex align-items-center justify-content-center flex-direction-column'>
          <Form style={{width: "80%", maxWidth: 500 }} onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Votre Email" onChange={(e) => setEmail(e.target.value)} value={email} require />
              <Form.Text className="text-muted">
              Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} require />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <div className="py-4">
              <p className="text-center">
                Pas encore de compte ? <Link to="/signup">Enrégistrez-vous ici !!</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>

  );
}

export default Login;