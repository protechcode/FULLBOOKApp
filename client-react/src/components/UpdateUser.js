import { Component , useState} from 'react';
import {
    Card, CardText, CardBody, CardTitle, CardSubtitle, Button,
    Modal,
    ModalHeader,
    ModalBody

} from 'reactstrap';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "./Profile.css";


class UpdateUser extends Component {

    state = {
        modal: false,
        isOpen: false,
        name : this.props.user.name,
        email : this.props.user.email,
        

    };

    static propTypes = {

        isAuthenticated: PropTypes.bool,
        user: PropTypes.object.isRequired,
        auth: PropTypes.object.isRequired,

    }

    toggle = () => {
        // Clear errors
        // this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
        
    }


    
      handleSubmit(event) {
        
        event.preventDefault();
    // alert('Le nom a été soumis : ' + this.state.name);
      }
    
    

    render() {
        
      //  const   user  = this.props.user;

     
        return (
            <div className="container">
                    
                    <h2 className="text-gray-900 title-font text-lg font-medium" onClick={this.toggle}>Edite Profile</h2>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    size="lg"
                >
                    <ModalHeader toggle={this.toggle}>
                        Profile
                    </ModalHeader>
                    <ModalBody>
                    <div className="updateProfileContainer">
            <div className="updateProfileBox">
              <h2 className="updateProfileHeading">Update Profile</h2>

              <form onSubmit={this.handleSubmit}>
                <div className="updateProfileName">
                    <label>Name : </label>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={this.state.name}  onChange={(e) => this.setState({
                        name: e.target.name
                    }) }
                  />
                </div>
                <div className="updateProfileEmail">
                    <label>Email : </label>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={this.state.email} onChange={(e) => this.setState({
                        email: e.target.email
                    }) } 

                  />
                </div>

                <input
                  type="submit"
                  className="updateProfileBtn"
                />
              </form>
            </div>
          </div>

                    </ModalBody>
                </Modal>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({

    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    auth: state.auth

})

export default connect(mapStateToProps, )(UpdateUser);