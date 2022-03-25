import React, { useEffect, useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router";

function CreateAlert(props) {
    const { title: cityName = "uvhjbnj", message = "yuvjhbn" } = props;
    const location = useLocation();

    const formData = useRef({});

    const formGroupRowClass = "mt-3";

    const AppFormControl = (props) => {
        const { sm = 12 } = props;
        return (
            <Col sm={sm} {...props}>
                {props.children}
            </Col>
        );
    };

    console.log("yd", location.state);

    return (
        <Container className="mt-4">
            Form
            <Form>
                <Row className={`${formGroupRowClass}`}>
                    <Form.Label>District to Alert</Form.Label>
                    <AppFormControl>
                        <Form.Control readOnly value={cityName} />
                    </AppFormControl>
                </Row>
                <Row className={`${formGroupRowClass}`}>
                    <Form.Label>Date and time</Form.Label>
                    <AppFormControl sm={6}>
                        <Form.Control type="date" className="col-6" />
                    </AppFormControl>
                    <AppFormControl sm={6}>
                        <Form.Control type="time" className="col-6" />
                    </AppFormControl>
                </Row>
                <Row className={`${formGroupRowClass}`}>
                    <Form.Label>Alert message</Form.Label>
                    <AppFormControl>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            defaultValue={message}
                        />
                    </AppFormControl>
                </Row>
                <Row className={`${formGroupRowClass}`}>
                    <Form.Label>Platforms</Form.Label>
                    <AppFormControl>
                        <Form.Check checked type="checkbox" label={`SMS`} />
                        <Form.Check type="checkbox" label={`Twitter`} />
                    </AppFormControl>
                </Row>
                <Row className={`${formGroupRowClass}`}>
                    <AppFormControl>
                        <Button variant="danger" className="w-25 float-end">
                            Send Alert
                        </Button>
                    </AppFormControl>
                </Row>
            </Form>
        </Container>
    );
}

export default CreateAlert;
