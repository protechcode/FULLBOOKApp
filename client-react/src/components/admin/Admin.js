import { Component, Fragment, useState } from 'react';

import AppNavbar from '../AppNavbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UsersCrud from './usersCRUD/UsersCRUDComponent';

import ListOfUsers from './usersCRUD/listOfUsers'
import { List,Card,CardBody,CardTitle, CardSubtitle, CardText, Button, Accordion, AccordionBody, AccordionItem, AccordionHeader} from 'reactstrap'
import { Collapse,CardHeader} from 'reactstrap';


import './Admin.css'

const BASE_URL = "http://localhost:4000/api"

function Admin() {
    
    const [toggleQuestion, setToggequestion] = useState(1);//1 is the default id to be opened by default
    
    
    
    return (
        <div>
            <AppNavbar/>
            <Card>
                <CardHeader onClick={() => setToggequestion(1)}>
                    <span className="font-weight-bold">List of Users</span>
                </CardHeader>
                <Collapse  isOpen={toggleQuestion === 1 ? true : false}>
                    <CardBody>
                        <UsersCrud/>
                    </CardBody>
                </Collapse>
            </Card>

            <Card>
                <CardHeader onClick={() => setToggequestion(2)}>
                    <span className="font-weight-bold">Something</span>
                </CardHeader>
                <Collapse  isOpen={toggleQuestion === 2 ? true : false}>
                    <CardBody>
                        <div className="users-create">
                            <p>Something</p>
                        </div>
                    </CardBody>
                </Collapse>
            </Card>

            
            
            
        
            </div>
    );
    }
export default Admin;
       

   