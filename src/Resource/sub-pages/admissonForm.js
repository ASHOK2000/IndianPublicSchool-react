import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import MyVerticallyCenteredModal from './TermsCondition';
import InputGroup from 'react-bootstrap/InputGroup';

function AdmissonForm() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Container>
            <Row>
                <Col sm={3}></Col>

                {/* form  in sm-4 */}
                <Col sm={6} className='shadow-lg p-2 mb-2 bg- '>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="firstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control required placeholder="First name" label='*First name' />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="firstName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control required placeholder="Last name" label='*Last name' />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Contact</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
                                <Form.Control
                                    pattern="\d{10}"
                                    placeholder="9876543210"
                                    maxLength="10"
                                    required />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Class</Form.Label>
                            <Form.Select defaultValue="Select class you want to admit">
                                <option>Select class you want to admit</option>
                                <option>&nbsp;L.K.G</option>
                                <option>&nbsp;U.K.G</option>
                                <option>Class 1</option>
                                <option>Class 2</option>
                                <option>Class 3</option>
                                <option>Class 4</option>
                                <option>Class 5</option>
                                <option>Class 6</option>
                                <option>Class 7</option>
                                <option>Class 8</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Previous School</Form.Label>
                            <Form.Control required placeholder="Previous Education Details" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>LandMark</Form.Label>
                            <Form.Control placeholder="School, lake, Tree etc ...." />
                        </Form.Group>

                        <Row className='mb-3'>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Madhya&nbsp;Pradesh</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>District</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Row>


                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label maxLength="6">Zip</Form.Label>
                                <Form.Control
                                    pattern="\d{6}"
                                    placeholder="Enter 6-digit zip code"
                                    maxLength="6"
                                    required />
                            </Form.Group>
                        </Row>


                        <div>
                            <Form.Group className="mb-3" id="formGridCheckbox"  >
                                <div className='d-flex align-items-center'>
                                    <Form.Check type="checkbox" className='me-2' />
                                    <Link to="#" onClick={() => setModalShow(true)} style={{ textDecoration: 'none' }}>Terms & Condition</Link>
                                </div>
                            </Form.Group>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>

                        <Button variant="primary" type="submit" className="mb-4 px-5 d-flex align-items-center" >
                            Submit
                        </Button>
                    </Form>


                </Col>
            </Row>
        </Container>
    );
}

export default AdmissonForm;