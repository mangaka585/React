import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem, Button, Row, Label, Col, Modal, ModalBody, ModalHeader } from "reactstrap";
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

    render(){
        return(
            <div>
                <Button outline onClick={this.toggleModal} color="secondary"><span className="fa fa-pencil fa-lg"></span>Submit Comment</Button>{' '}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                                <Col xs={12}><Label htmlFor="rating"><strong>Rating</strong></Label></Col>
                                <Col xs={12}>
                                    <Control.select model=".rating" id="rating" name="rating"
                                        className="form-control">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
<<<<<<< HEAD
                                <Col xs={12}><Label htmlFor="author"><strong>Your Name</strong></Label></Col>
                                <Col xs={12}>
                                    <Control.text model=".author" id="author" name="author"
=======
                                <Col xs={12}><Label htmlFor="yourname"><strong>Your Name</strong></Label></Col>
                                <Col xs={12}>
                                    <Control.text model=".yourname" id="yourname" name="yourname"
>>>>>>> dc7fd91499a85364065fae8838cba2508e45954c
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                            />
                                    <Errors
                                        className="text-danger"
<<<<<<< HEAD
                                        model=".author"
=======
                                        model=".yourname"
>>>>>>> dc7fd91499a85364065fae8838cba2508e45954c
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col xs={12}><Label htmlFor="comment"><strong>Comment</strong></Label></Col>
                                <Col xs={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment" rows='6'
                                        className="form-control"
<<<<<<< HEAD
                                    />
                                </Col>
                            </Row>
                            <Button color="primary">Submit</Button>{' '}
=======
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                </Col>
                            </Row>
>>>>>>> dc7fd91499a85364065fae8838cba2508e45954c
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

function RenderDish({dish}) {
    if (dish != null)
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return(
            <div></div>
        );
}

function RenderComments({comments}) {
    const commentElement = comments.map((comment) => {
        return(
            <li key={comment.id}>
                <li className="mt-2">{comment.comment}</li>
                <li className="mt-2"> -- {comment.author}, {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                }).format(new Date(comment.date))}</li>
            </li>
        );
    })
    return (
        <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {commentElement}
            </ul>
            <CommentForm />
        </div>
    );
}

const DishDetail = (props) => {
    if (props.dish != null)
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        )
    else
        return (
            <div></div>
        )
}

export default DishDetail;