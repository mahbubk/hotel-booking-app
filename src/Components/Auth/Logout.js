import React, { Component } from "react";
import { logout } from "../../Redux/actionCreators";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

class Logout extends Component {
    componentDidMount() {
        this.props.logout();
    }
    render() {
        return (<Redirect to='/' />)
    }
}

export default connect(null, mapDispatchToProps)(Logout);