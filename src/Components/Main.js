import React, { Component } from "react";
import Hotel from "./Body/Hotel";
import Auth from "./Auth/Auth";
import Logout from "./Auth/Logout";
import Header from "./Header/Header";
import CategoryButton from "./Body/categoryBtn";
import Single from "./Body/Single";
import Double from "./Body/Double";
import Master from "./Body/Master";
import Footer from "./Footer/Footer";
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { authCheck } from "../Redux/actionCreators";


const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(authCheck())
    }
}

class Main extends Component {

    componentDidMount() {
        this.props.authCheck();
    }
    render() {
        let routes = null;
        if (this.props.token === null) {
            routes = (
                <Switch>
                    <Route path='/login' component={Auth} />
                    <Redirect to='/login' />
                </Switch>
            )
        } else {
            routes = (
                <Switch>
                    <Route path='/logout' component={Logout} />
                    <Route exact path='/' component={Hotel} />
                    <Route path='/categoryBtn' component={CategoryButton} />
                    <Route path='/single' component={Single} />
                    <Route path='/double' component={Double} />
                    <Route path='/master' component={Master} />
                    <Redirect to='/' />
                </Switch>
            )
        }
        return (
            <div>
                <Header />
                <div className="container">
                    {routes}
                </div>
                <br />
                <Footer />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);