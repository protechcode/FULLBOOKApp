import { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';


const clientId="712390708441-alvmm06tc0v3e5940jgtctkl9qhclp8v.apps.googleusercontent.com";


class LoginModal extends Component {
    state = {
        modal: false,
        email: '',
        password: '',
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if(error !== prevProps.error){
            // Check for register error
            if(error.id === 'LOGIN_FAIL'){
                this.setState({msg: error.msg.msg});
            }
            else{
                this.setState({msg:null});
            }
        }

        // If authenticated, close modal
        if(this.state.modal){
            if(isAuthenticated){
                this.toggle();
            }
        }
    }

    toggle = () => {
        // Clear errors
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault(); 
        
        const {email, password} = this.state;
        const user = {email, password};

        // Attempt to login
        this.props.login(user);
    }
    //GoogleOauth
    onSuccess = (res) => {
        
        
        console.log('Login Success: currentUser:', res.profileObj);
        alert(
          `Logged in successfully welcome ${res.profileObj.name} .`
        );
       
        this.refreshTokenSetup(res);
      };

    onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
          `Failed to login with Google.`
        );
      };
     
    signOut= (res)=>{
        
        alert("logout succesfull");
        localStorage.removeItem('GoogleauthToken');
      }
    refreshTokenSetup = (res) => {
        // Timing to renew access token
        let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
      
        const refreshToken = async () => {
          const newAuthRes = await res.reloadAuthResponse();
          refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
          console.log('newAuthRes:', newAuthRes);
          // saveUserToken(newAuthRes.access_token);  <-- save new token
          localStorage.setItem('GoogleauthToken', newAuthRes.id_token);
      
          // Setup the other timer after the first one
          setTimeout(refreshToken, refreshTiming);
        };
      
        // Setup first refresh timer
        setTimeout(refreshToken, refreshTiming);
      };
    //////////////////////////////////////////////////7

    render(){
        return(
            <div className="container">
            {  /*  <Button color="success" className="btn btn-sm"><NavLink onClick={this.toggle} href="#"><span className="text-dark"><b>Login</b></span></NavLink></Button>
   */ }
               <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0" onClick={this.toggle} href="#">Login</a>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        {this.state.msg ? (<Alert color="danger">{this.state.msg}</Alert>):null}
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
                                <Label for="password">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Login</Button>
                                <GoogleLogin
                                    clientId={clientId}
                                    buttonText="Log in with Google"
                                    onSuccess={this.onSuccess}
                                    onFailure={this.onFailure}
                                    cookiePolicy={'single_host_origin'}
                                />
                                <GoogleLogout
                                    clientId={clientId}
                                    buttonText="Log out of Google"
                                    onLogoutSuccess={this.signOut}
                                   
                                />

                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps,{login, clearErrors})(LoginModal);