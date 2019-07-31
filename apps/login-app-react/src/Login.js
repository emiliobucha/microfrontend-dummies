import React, { Component } from 'react';
import './Login.css';

import { compose } from 'recompose';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';


const navigateTo = url => window.history.pushState(null, null, url);

const LoginPage = (props) => (
    <div>
         <Login {...props} />
    </div>
);

class LoginForm extends Component {

    user={
        username:'admin',
        password:'admin',
        mail:'admin@admin.com'
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false,
         //   globalEventDistributor: this.props.customProps.globalEventDistributor,
         //   constants: this.props.customProps.constants,
        };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    login(e) {
    e.preventDefault();
    this.setState({submitted: true});
    //const {username, password, globalEventDistributor, constants} = this.state;
        const {username, password} = this.state;
    if (username && password) {


        try {
            if (username === this.user.username && password === this.user.password) {
                ToastsStore.success("Bienvenido: " + this.user.email);
              //  globalEventDistributor.dispatch({type: constants.LOGIN, user: this.user});
                localStorage.setItem('user', JSON.stringify(this.user));
            } else {
                ToastsStore.error('Usuario y/o contraseña incorrecto');
            }
        }
        catch (error) {
        }
        navigateTo('/home');
        window.dispatchEvent(new Event('loginEvent'));
    }
}

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { username, password, submitted } = this.state;
        return (
            <div className="wrap">
            <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
    <div className="">
            <p className="form-title">
            Iniciar sesión</p>
        <form id="loginForm" name="form" onSubmit={this.login} className="login">
            <div className="form-group clearfix">
            <div className="col-md-12 col-sm-12 col-xs-12">
            <input type="text" className="PlaceHolder" placeholder="Usuario" name="username" value={username} onChange={this.handleChange} />
        {submitted && !username &&
        <div className="help-block">Usuario es requerido</div>
        }
    </div>
        </div>
        <div className="form-group clearfix">
            <div className="col-md-12 col-sm-12 col-xs-12">
            <input type="password" className="PlaceHolder" placeholder="Contraseña" name="password" value={password} onChange={this.handleChange} />
        {submitted && !password &&
        <div className="help-block">Contraseña es requerida</div>
        }
    </div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 form-group text-right">
            <input className="btn btn-success btn-sm"
        type="submit" disabled={!(this.state.username && this.state.password)} value="Ingresar" />
            </div>
            </form>
            </div>
            </div>
    );
    }
}

const Login = compose()(LoginForm);

export default LoginPage;

export { Login };