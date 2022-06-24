import React, { Component } from "react";
import { CardImg, CardBody, CardText, CardTitle, Card, CardColumns, Button, Form, Input } from 'reactstrap';

class Double extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, cal: 5, dis: false, name: '', number: '' };
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = event => {
        this.setState({
            count: this.state.count + 1,
            cal: this.state.cal - 1,
            name: '',
            number: ''
        })
        if (this.state.cal === 0) {
            this.setState({
                dis: true,
                cal: 0
            })
        }
        // console.log(this.state.count);
        event.preventDefault();
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <div className="container">
                    <Card>
                        <CardTitle tag="h5">
                            Reserve Your Room
                        </CardTitle>
                        <CardText>
                            Total Room Left: {this.state.cal}
                        </CardText>
                        <Form onSubmit={this.handleClick}>
                            <Input
                                type="text"
                                name="name"
                                value={this.state.name}
                                placeholder="Your Name"
                                onChange={this.handleInputChange}
                                disabled={this.state.dis}
                                required
                            />
                            <br />
                            <Input
                                type="text"
                                name="number"
                                value={this.state.number}
                                placeholder="Pnone Number"
                                onChange={this.handleInputChange}
                                disabled={this.state.dis}
                                required
                            />
                            <br />
                            <Button disabled={this.state.dis} type="submit">Reserve</Button>
                        </Form>

                    </Card>
                </div>
                <br />
                <h2>Deluxe Double Room</h2>
                <br />
                <ul>
                    <li>100 m2</li>
                    <li>City View</li>
                    <li>Air Conditioning</li>
                    <li>Attached bathroom</li>
                    <li>Falt-Screen TV</li>
                    <li>Free Wifi</li>
                    <li>Mini Bar</li>
                    <li>Free Parking</li>
                </ul>
                <br />
                <p>Comfy beds, 8.2 – Based on 201 reviews </p>
                <br />
                <p>
                    This large air-conditioned room features a seating area and comes equipped with a work desk, TV with satellite channels, electric kettle and a mini-bar.
                    The attached bathroom has hot/cold shower facilities.
                </p>
                <br />
                <h4>View:</h4>
                <br />
                <p>City View</p>
                <br />
                <h4>Room Facilities:</h4>
                <br />
                <ul>
                    <li>Upper floors accessible by elevator</li>
                    <li>Linens</li>
                    <li>Alarm clock</li>
                    <li>Tea/Coffee maker</li>
                    <li>Minibar</li>
                    <li>Air conditioning</li>
                    <li>Suit press</li>
                    <li>Private entrance</li>
                    <li>Cable channels</li>
                    <li>Drying rack for clothing</li>
                    <li>Wake-up service</li>
                    <li>Executive lounge access</li>
                    <li>Single-room AC for guest accommodation</li>
                </ul>
                <br />
                <div className="row">
                    <CardColumns>
                        <Card style={{ margin: "10px" }}>
                            <CardBody>
                                <CardImg
                                    width="100%"
                                    src="images/d1.jpg"
                                    style={{ opacity: "0.5" }} />
                            </CardBody>
                        </Card>
                    </CardColumns>
                    <CardColumns>
                        <Card style={{ margin: "10px" }}>
                            <CardBody>
                                <CardImg
                                    width="100%"
                                    src="images/d2.jpg"
                                    style={{ opacity: "0.5" }} />
                            </CardBody>
                        </Card>
                    </CardColumns>
                    <CardColumns>
                        <Card style={{ margin: "10px" }}>
                            <CardBody>
                                <CardImg
                                    width="100%"
                                    src="images/d3.jpg"
                                    style={{ opacity: "0.5" }} />
                            </CardBody>
                        </Card>
                    </CardColumns>
                    <CardColumns>
                        <Card style={{ margin: "10px" }}>
                            <CardBody>
                                <CardImg
                                    width="100%"
                                    src="images/d4.jpg"
                                    style={{ opacity: "0.5" }} />
                            </CardBody>
                        </Card>
                    </CardColumns>
                </div>
            </div>
        )
    }
}
export default Double;
