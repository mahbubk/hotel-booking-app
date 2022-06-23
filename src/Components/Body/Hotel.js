import React, { Component } from "react";
import { Card, CardColumns, Alert } from 'reactstrap';
import { CardImg, CardBody } from 'reactstrap';


class Hotel extends Component {
    render() {
        return (
            <div className="container">
                <h2>Travel with confidence</h2>
                <br />
                <CardColumns>
                    <Card style={{ margin: "10px" }}>
                        <CardBody>
                            <CardImg
                                width="100%"
                                src="images/stn.jpg"
                                style={{ opacity: "0.5" }} />
                        </CardBody>
                    </Card>
                </CardColumns>
                <CardColumns>
                    <Card style={{ margin: "10px" }}>
                        <CardBody>
                            <CardImg
                                width="100%"
                                src="images/mhl.jpg"
                                style={{ opacity: "0.5" }} />
                        </CardBody>
                    </Card>
                </CardColumns>
                <CardColumns>
                    <Card style={{ margin: "10px" }}>
                        <CardBody>
                            <CardImg
                                width="100%"
                                src="images/sea.jpg"
                                style={{ opacity: "0.5" }} />
                        </CardBody>
                    </Card>
                </CardColumns>
                <p>Many properties have updated us about their enhanced health and safety measures. So, during your search, you may find details like:</p>
                <br />

                <h4>Official health standards</h4>
                <p>Properties adhering to corporate/organisational sanitisation guidelines.</p>
                <h4>Hygiene and sanitisation</h4>
                <p>The use of disinfectant and whether properties enforce a gap period between stays.</p>
                <h4>Social distancing</h4>
                <p>Contactless check-in and check-out along with other social distancing measures.</p>
                <h4>Essentials at the property</h4>
                <p>Free hand sanitiser for guests and individually wrapped food options.</p>
            </div>
        )
    }
}


export default Hotel;