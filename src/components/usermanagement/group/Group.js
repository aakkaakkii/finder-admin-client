import React, {useEffect} from "react";
import {Button, Container, TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import {connect} from "react-redux";
import {getGroup, loadGroup, setGroupChange, addGroup, updateGroup} from "../../../store/usermanagment/group/action";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {loadPermissions} from "../../../store/usermanagment/permission/action";

const Group = ({
                   group, groups, loadGroup, getGroup, setGroupChange,
                   addGroup, updateGroup,
                   permissions, loadPermissions
               }) => {

    useEffect(() => {
        loadGroup()
        loadPermissions()
        console.log(permissions)

    }, []);

    const onFieldChange = (e) => {
        console.log('asd')
        let newGroup = group;
        newGroup[e.target.name] = e.target.value
        console.log(newGroup)

        setGroupChange(newGroup)
    }

    const handleSubmit = () => {
        if(group.id) {
            updateGroup(group)
        } else {
            addGroup(group)
        }
    }

    const onSelectGroup = (group) => {
        setGroupChange(group)
    }

    return (
        <Container maxWidth="md">
            <Grid container>
                <Grid item xs={6} align="center">
                    {groups.map(d =>
                        <div key={d.id}
                             onClick={() => onSelectGroup(d)}
                        > {d.id} - {d.name} </div>
                    )}
                </Grid>
                <Grid item xs={6} align="center">
                    <FormControl>
                        <TextField type='text'
                                   label="name"
                                   name='name'
                                   onChange={onFieldChange}
                                   value={group.name}
                        />
                        <Select
                            multiple
                            name='permissions'
                            onChange={onFieldChange}
                            value={group.permissions}
                        >
                            {permissions.map(perm => <MenuItem key={perm} value={perm}>{perm}</MenuItem>)}
                        </Select>
                        <Button
                            variant="contained"
                            color="primary"
                            margin="normal"
                            fullWidth
                            onClick={handleSubmit}
                        >
                            save
                        </Button>
                    </FormControl>
                </Grid>
            </Grid>
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        groups: state.usermanagment.group.groups,
        group: state.usermanagment.group.group,
        permissions: state.usermanagment.permission.permissions,
    }
};

const mapDispatchToProps = {
    loadGroup,
    getGroup,
    setGroupChange,
    loadPermissions,
    addGroup,
    updateGroup,
};


export default connect(mapStateToProps, mapDispatchToProps)(Group);
