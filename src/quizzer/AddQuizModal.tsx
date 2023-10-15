/* Things I feel like need to be debugged:
- Do we need JSX.Element in header (I think so)
- import Quiz interface
- Change to HTMLTEXTELEMENT not HTMLINPUT
- I think this saveChanges variable is wrong (it is currently a lambda function, which is okay) but i feel like its wrong in some ways
- create a state called that includes setBody, which is an onChange call 
- include the modal types in the header. And change the header to be a function instead of const
- AddMovieModul on the tome is exactly what this file should look like
*/

import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
//import { Question } from "../interfaces/question";

export function AddQuizModal({
    show,
    handleClose,
    addQuiz
}: {
    //takes the place of writing an interface
    show: boolean;
    handleClose: () => void;
    addQuiz: (title: string, body: string) => void;
}) {
    const [title, setTitle] = useState<string>("Example Quiz");
    const [body, setBody] = useState<string>("Example Description");

    const saveChanges = () => {
        addQuiz(title, body);
        handleClose();
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formQuizId">
                        <Form.Label>Title: </Form.Label>
                        <Form.Control
                            value={title}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setTitle(e.target.value)}
                        ></Form.Control>
                        <Form.Label>Description: </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={body}
                            onChange={(
                                e: React.ChangeEvent<HTMLTextAreaElement>
                            ) => setBody(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
