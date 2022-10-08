import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Container from "@material-ui/core/Container";

import HCaptcha from "@hcaptcha/react-hcaptcha";
import rext from "rexter";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "./index.scss";

const sitekey = "e76d04b5-85fd-4c27-b158-d521e16e1382";
const styles = {
    root: {
        flexGrow: 1,
        width: "100%"
    },
    menuButton: {
        marginRight: 8
    },
    title: {
        flexGrow: 1
    },
    appBarBottom: {
        top: "auto",
        bottom: 0
    },
    grow: {
        flexGrow: 1
    },
    paper: {
        paddingBottom: 90
    },
    text: {
        padding: 2
    },
    backButton: {
        marginRight: 8
    },
    instructions: {
        marginTop: 8,
        marginBottom: 8
    }
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            data: {
                email1: "",
                email2: "",
                email3: ""
            },
            disabled: false,
            captchaValid: false,
            submitted: false
        };
    }
    getSteps = () => {
        return [
            "Select master blaster campaign settings",
            "Create an ad group",
            "Create an ad"
        ];
    };

    onChange = event => {
        const { data } = this.state;
        data[event.target.name] = event.target.value;
        this.setState({ data });
    };

    submit = () => {
        this.form.submit();
    };

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    };

    prevStep = () => {
        let { step } = this.state;
        if (step > 1) {
            step--;
        }
        this.setState({ step });
    };

    nextStep = () => {
        this.form.isFormValid(false).then(isValid => {
            if (isValid) {
                let { step } = this.state;
                if (step < 3) {
                    step++;
                }
                this.setState({ step });
            }
        });
    };

    handleVerificationSuccess = async response => {
        // note - if it wreen't for CORS this woulld work
        var bodyFormData = new FormData();
        bodyFormData.set("secret", sitekey);
        bodyFormData.set("response", response);
        try {
            const { data } = await rext.post(
                "https://hcaptcha.com/siteverify",
                bodyFormData,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    crossdomain: true
                }
            );
            console.log("server response:", data);
            //setValidation(data);
            this.setState({ captchaValid: data });
        } catch (err) {
            console.log("CANNOT SUBMIT:", response, err);
        }
    };

    validatorListener = result => {
        this.setState({ disabled: !result });
    };

    renderStep = () => {
        const { step, data } = this.state;
        let content = null;
        switch (step) {
            case 1:
                content = (
                    <div className="step1">
                        <TextValidator
                            key={1}
                            name="email1"
                            label="email 1"
                            validators={["required", "isEmail"]}
                            errorMessages={["required field", "invalid email"]}
                            value={data.email1}
                            onChange={this.onChange}
                            validatorListener={this.validatorListener}
                        />
                        <Button
                        className="step1__button"
                            color="primary"
                            variant="contained"
                            onClick={this.nextStep || this.submit}
                        >
                            Verify
                        </Button>
                    </div>
                );
                break;
            case 2:
                content = (
                    <TextValidator
                        key={2}
                        name="email2"
                        label="email 2"
                        validators={["required", "isEmail"]}
                        errorMessages={["required field", "invalid email"]}
                        value={data.email2}
                        onChange={this.onChange}
                        validatorListener={this.validatorListener}
                    />
                );
                break;
            case 3:
                content = (
                    <div>
                        <TextValidator
                            key={3}
                            name="email3"
                            label="email 3"
                            validators={["required", "isEmail"]}
                            errorMessages={["required field", "invalid email"]}
                            value={data.email3}
                            onChange={this.onChange}
                            validatorListener={this.validatorListener}
                        />
                        <HCaptcha
                            sitekey={sitekey}
                            onVerify={token => this.handleVerificationSuccess(token)}
                        />
                    </div>
                );
                break;
            default:
                content = <div>Error</div>;
                break;
        }
        return content;
    };
    render() {
        const { classes } = this.props;
        const { step, disabled, submitted, captchaValid } = this.state;
        //const [activeStep, setActiveStep] = this.props;
        const steps = this.getSteps();
        return (
            <div className={classes.root}>
                {/*
                                  <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar> */}
                <Paper square className={classes.paper}>
                    <div className={classes.root}>
                        <Stepper activeStep={step - 1} alternativeLabel>
                            {steps.map(label => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <ValidatorForm
                            ref={r => {
                                this.form = r;
                            }}
                            onSubmit={this.handleSubmit}
                            instantValidate
                        >
                            <Container>{this.renderStep()}</Container>
                            <AppBar
                                position="fixed"
                                color="primary"
                                className={classes.appBarBottom}
                            >
                                <Toolbar>
                                    <Button
                                        onClick={this.prevStep}
                                        style={{ marginRight: "16px" }}
                                        disabled={step === 1}
                                    >
                                        previous
                                    </Button>
                                    <div className={classes.grow} />
                                    {/**/}
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        onClick={step < 3 ? this.nextStep : this.submit}
                                        disabled={step < 3 ? disabled || submitted : !captchaValid}
                                    >
                                        {(submitted && "Your form is submitted!") ||
                                            (step < 3 ? "Next" : "Submit")}
                                    </Button>
                                </Toolbar>
                            </AppBar>
                        </ValidatorForm>
                    </div>
                </Paper>
            </div>
        );
    }
}
export default withStyles(styles)(App);
