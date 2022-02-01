import { Component } from 'react';
import AppNavbar from './AppNavbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class Home extends Component {



    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object.isRequired
    }



    render(){
      //  const user = this.props.user;
        return (
            <div>
            <AppNavbar/>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})

export default connect(mapStateToProps, )(Home);