import { useAppDispatch, useAppSelector } from '../hooks/redux';
import * as React from 'react';
import validator from 'validator';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthUserInput } from '../@types/auth';
import {
  Button,
  Form,
  Image,
  Row,
  Col,
  Card,
  Container,
  Spinner,
  Alert,
} from 'react-bootstrap';
import logo from '../assets/logo.png';
import { useCustomMutation } from '../hooks/mutation-hook';
import { LOGIN } from '../graphql/query';
export const Login = () => {
  const navigate = useNavigate();
  const authData = useAppSelector((state) => state.auth);
  const [email, setEmail] = React.useState<string>('');
  const [messageEmail, setMessageEmail] = React.useState<string | null>('');
  const [messagePassword, setMessagePassword] = React.useState<string | null>(
    '',
  );
  const [password, setPassword] = React.useState<string>('');
  const [mutate, {loading }] = useCustomMutation(LOGIN); 

  const setEmailInput = (value: string) => {
    if (!validator.isEmail(value)) {
      setMessageEmail('Email non validé');
    } else {
      setMessageEmail(null);
    }
    setEmail(value);
  };
  const setPasswordInput = (value: string) => {
    if (value.length < 6) {
      setMessagePassword('Mot de passe trop court');
    } else {
      setMessagePassword(null);
    }
    setPassword(value);
  };

  const signIn = () => {
    const data: AuthUserInput = {
      email,
      password,
    };
    mutate({variables: {
      input: {
        exampleField : "teste" 
      }
    }})
  };

  React.useEffect(() => {
    if (authData.value.token) {
      navigate('/admin');
    }
  }, [authData]);

  if (authData.value.access_token) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <Container
      className="h-100 animate__animated animate__zoomIn  animate__slow"
      style={{ width: '100vw', height: '100vh' }}
    >
      <Row className="h-100 justify-content-center ">
        <Col
          className="align-self-center mt-2 mb-2"
          sm={10}
          md={8}
          lg={6}
          style={{ maxWidth: 480 }}
        >
          <Card className="shadow-lg border-sm">
            <Card.Body>
              <Form className="form-signin">
                <Form.Group className="mt-2 mb-4">
                  <div
                    className="justify-content-center"
                    style={{ textAlign: 'center' }}
                  >
                    <Image
                      src={logo}
                      className="align-self-center mr-3"
                      width="150"
                      alt="..."
                    />
                  </div>
                </Form.Group>
                <Form.Group>
                  <div className="d-flex justify">
                    <Form.Label htmlFor="inputEmail" className="text-default">
                      Pseudo ou E-mail
                    </Form.Label>
                  </div>
                  <Form.Control
                    value={email}
                    onChange={(t) => setEmailInput(t.target.value)}
                    type="text"
                    placeholder="exemple@mail.com"
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <div className="d-flex justify-content-start">
                    <Form.Label
                      htmlFor="inputPassword"
                      className="text-default"
                    >
                      Mot de passe
                    </Form.Label>
                  </div>
                  <Form.Control
                    onChange={(t) => setPasswordInput(t.target.value)}
                    value={password}
                    type="password"
                    placeholder="***********"
                  />
                </Form.Group>
                {authData.value.error && (
                  <Form.Group className="mt-4">
                    <Alert style={{ borderRadius: 0 }} variant={'danger'}>
                      {authData.value.error}
                    </Alert>
                  </Form.Group>
                )}
                <Form.Group className="mt-4">
                  <div className="d-grid gap-2">
                    <Button
                      disabled={
                        messageEmail !== null || messagePassword !== null
                      }
                      variant="default"
                      onClick={signIn}
                      type="button"
                      className="btn btn-block  bg-theme-color"
                    >
                      {loading ? (
                        <Spinner
                          as="span"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                          animation="border"
                        />
                      ) : (
                        'Login'
                      )}
                    </Button>
                  </div>
                </Form.Group>
                <div className="d-flex mt-4">
                  <Link
                    to="#"
                    type="button"
                    className="btn btn-link text-theme-color "
                  >
                    Mot de passe oublié
                  </Link>
                  <Link
                    to="/register"
                    className="btn btn-link text-theme-color "
                  >
                    S'inscire
                  </Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
