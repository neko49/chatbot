import React, { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';
import botImg from '../assets/bot.jpeg';



function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState("");

  //state chargement d'image
  const [image, setImage] = useState(null);
  const [uploadingImg, setUploadingImg] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  function validateImg(e) {
    const file = e.target.files[0];
    if (file.size >= 1048576) {
        return alert("Max file size is 1mb");
    } else {
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
    }
  };

  async function uploadImage() {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "spnebdae");
    try {
      setUploadingImg(true);
      let res = await fetch("https://api.cloudinary.com/v1_1/dq76jmhaq/image/upload", {
          method: "post",
          body: data,
      });
      const urlData = await res.json();
      setUploadingImg(false);
      return urlData.url;
  } catch (error) {
      setUploadingImg(false);
      console.log(error);
  }
  }
  
  async function handleSignup(e) {
    e.preventDefault();
    if (!image) return alert("Please upload your profile picture");
    const url = await uploadImage(image);
    console.log(url);
    //enregistrement utilisateur

  };

  return (
    <Container>
      <Row>
        <Col md={7} className='d-flex align-items-center justify-content-center flex-direction-column'>
          <Form style={{width: "80%", maxWidth: 500 }} onSubmit={handleSignup}>

          <h1 className='text-center'>Création de Compte</h1>
          <div className='signup-profile-pic__container'>
            <img src={imagePreview || botImg} alt='' className='signup-profile-pic' />
            <label htmlFor='image-upload' className='image-upload-label'>
              <i className='fas fa-plus-circle add-picture-icon'></i>
            </label>
            <input type='file' id='image-upload' hidden accept='image/png, image/jpeg' onChange={validateImg} />
          </div>
          <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Votre nom" onChange={(e) => setName(e.target.value)} value={name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Votre Email" onChange={(e) => setEmail(e.target.value)} value={email} />
              <Form.Text className="text-muted">
              Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </Form.Group>

            <Button variant="primary" type="submit">
              {uploadingImg ? "En cours d'enregistrement" : "Enregistrez-vous"}
            </Button>
            <div className="py-4">
              <p className="text-center">
                Déjà un compte ? <Link to="/login">Connectez-vous ici !!</Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col md={5} className='signup__bg'></Col>
      </Row>
    </Container>
  )
}

export default Signup