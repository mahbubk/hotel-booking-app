import React, { Component } from "react";
import { CardImg, CardBody, CardText, CardTitle, Card, CardColumns, Button } from 'reactstrap';

class Master extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, cal: 5, dis: false };
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1,
            cal: this.state.cal - 1
        })
        if (this.state.cal === 0) {
            this.setState({
                dis: true,
                cal: 0
            })
        }
        // console.log(this.state.count);
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
                        <Button disabled={this.state.dis} onClick={this.handleClick}>
                            Reserve
                        </Button>
                    </Card>
                </div>
                <br />
                <h2>Premium Quadruple Room</h2>
                <br />
                <ul>
                    <li>120 m2</li>
                    <li>Private kitchenette</li>
                    <li>Attached Bathroom</li>
                    <li>City View</li>
                    <li>Air Conditioning</li>
                    <li>Sound Proof</li>
                    <li>Mini-Bar</li>
                    <li>Free Parking</li>
                </ul>
                <br />
                <p>Comfy beds, 8.2 – Based on 201 reviews </p>
                <br />
                <p>This quadruple room features air conditioning, private entrance and dining area.</p>
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
                    <li>Extra long beds  8.5 ft</li>
                    <li>Hand sanitizer</li>
                    <li>Tea/Coffee maker</li>
                    <li>Private entrance</li>
                    <li>Ironing facilities</li>
                    <li>Interconnecting room(s) available</li>
                    <li>Laptop safe</li>
                    <li>Refrigerator</li>
                    <li>Microwave</li>
                    <li>Electric kettle</li>
                    <li>Dining table</li>
                    <li>Drying rack for clothing</li>
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
                                    src="images/m1.jpg"
                                    style={{ opacity: "0.5" }} />
                            </CardBody>
                        </Card>
                    </CardColumns>
                    <CardColumns>
                        <Card style={{ margin: "10px" }}>
                            <CardBody>
                                <CardImg
                                    width="100%"
                                    src="images/m2.jpg"
                                    style={{ opacity: "0.5" }} />
                            </CardBody>
                        </Card>
                    </CardColumns>
                    <CardColumns>
                        <Card style={{ margin: "10px" }}>
                            <CardBody>
                                <CardImg
                                    width="100%"
                                    src="images/m3.jpg"
                                    style={{ opacity: "0.5" }} />
                            </CardBody>
                        </Card>
                    </CardColumns>
                    <CardColumns>
                        <Card style={{ margin: "10px" }}>
                            <CardBody>
                                <CardImg
                                    width="100%"
                                    src="images/m4.jpg"
                                    style={{ opacity: "0.5" }} />
                            </CardBody>
                        </Card>
                    </CardColumns>
                    <CardColumns>
                        <Card style={{ margin: "10px" }}>
                            <CardBody>
                                <CardImg
                                    width="100%"
                                    src="images/m5.jpg"
                                    style={{ opacity: "0.5" }} />
                            </CardBody>
                        </Card>
                    </CardColumns>
                </div>
            </div>
        )
    }
}
export default Master;