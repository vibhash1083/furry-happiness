import React from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons';
import postApi from 'views/Service.js';
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

class LoginTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        if(nam == 'username'){
            this.setState({username: event.target.value});
        }else{
            this.setState({password: event.target.value});
        }
    
    }
    

    handleSubmit(event) {
        // alert('Login: ' + this.state.username + this.state.password);
        let url = 'http://localhost:8090/authenticate';
        let  parameters = {'username': this.state.username, 'password':this.state.password }
        postApi(url,parameters).then(data => {
            localStorage.setItem('token', data.token);
        })
        if (!(localStorage.getItem("token") === null)) {
           console.log("Received token");
           this.props.history.push("/home");
        }
        else{
            console.log("Token not present");
        }

        event.preventDefault();
    }
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.padding}>
                <div className={classes.margin}>
                    {/* <Grid container md={6}></Grid> */}
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item md={3}></Grid>
                        <Grid item >
                            <Face />
                        </Grid>
                        <Grid item md={5} sm={true} xs={true}>
                            <TextField name="username" label="Username" onChange={this.handleChange} type="email" fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item md={3}></Grid>
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={5} sm={true} xs={true}>
                            <TextField name="password" label="Password" onChange={this.handleChange} type="password" fullWidth required />
                        </Grid>
                    </Grid>
                    {/* <Grid container alignItems="center" justify="space-between">
                        <Grid item md={1}></Grid>
                        <Grid item>
                            <FormControlLabel control={
                                <Checkbox
                                    color="primary"
                                />
                            } label="Remember me" />
                        </Grid>
                        <Grid item>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                        </Grid>
                    </Grid> */}
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Grid item md={3}></Grid>
                        <Button onClick={this.handleSubmit} variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
                    </Grid>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(LoginTab);