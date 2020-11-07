import React from "react";
import {withRouter, useRouteMatch, Link, Route, Switch} from "react-router-dom";

import {Button} from '@material-ui/core';
import User from "./user/User";
import Group from "./group/Group";


const Usermanagement = ({history}) => {
    let {path, url} = useRouteMatch();

    const changeLocation = (type) => {
        history.push(`${url}/${type}`)
    }

    return (
        <div>

            <Button variant="contained" color="primary" onClick={()=>changeLocation("user")}>
                User
            </Button>
            <Button variant="contained" color="primary" onClick={()=>changeLocation("group")}>
                Group
            </Button>

            <Switch>
                <Route exact path={`${path}/group`} render={()=><Group/>}/>
                <Route exact path={`${path}/user`} render={()=><User/>}/>
            </Switch>
        </div>
    );
}

export default withRouter(Usermanagement);
