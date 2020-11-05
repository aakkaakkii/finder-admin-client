import React from "react";
import classes from "./Header.css"
import AppBar from "@material-ui/core/AppBar";
import {Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <AppBar position="static" className={classes.Header}>
            <Toolbar>
                <Typography>
                    <Link to="/">HOME</Link>
                    <Link to="/usermanagement">usermanagement</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
