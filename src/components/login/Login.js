import React from "react";
import {connect} from "react-redux";
import {setPasswordText, setUsernameText, login} from "../../store/login/actions";
import {Button, Container, TextField} from "@material-ui/core";

const Login = ({username, password, setUsernameText, setPasswordText, login}) => {
    const onUsernameChange = (event) => {
        setUsernameText(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPasswordText(event.target.value);
    }

    const onLogin = () => {
        let user = {
            username: username,
            password: password,
        }

        login(user)
    }

    return (
        <Container maxWidth="xs">
            <TextField
                type='text'
                variant="outlined"
                label="Enter Username"
                name='username'
                margin="normal"
                fullWidth
                value={username}
                onChange={onUsernameChange}
            />
            <TextField
                type='password'
                variant="outlined"
                label="Enter Password"
                name='password'
                margin="normal"
                fullWidth
                value={password}
                onChange={onPasswordChange}
            />
            <Button
                variant="contained"
                color="primary"
                margin="normal"
                fullWidth
                onClick={onLogin}
            >
                Log in
            </Button>


        </Container>
    )
}

const mapStateToProps = state => {
    return {
        username: state.login.username,
        password: state.login.password,
    }
};

const mapDispatchToProps = {
    setUsernameText: setUsernameText,
    setPasswordText: setPasswordText,
    login: login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
