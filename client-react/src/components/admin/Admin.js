import { Component, Fragment, useState } from 'react';

import AppNavbar from '../AppNavbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UsersCrud from './usersCRUD/UsersCRUDComponent';
import ItemsCrud from './itemsCRUD/ItemsCrudComponent';
import ProvidersCrud from './providersCRUD/ProvidersCRUDComponent';

import ListOfUsers from './usersCRUD/listOfUsers'
import { List,Card,CardBody,CardTitle, CardSubtitle, CardText, Button, Accordion, AccordionBody, AccordionItem, AccordionHeader} from 'reactstrap'
import { Collapse,CardHeader} from 'reactstrap';


import './Admin.css'

const BASE_URL = "http://localhost:4000/api"

function Admin() {
    
    const [toggleQuestion, setToggequestion] = useState(0);//1 is the default id to be opened by default
    
    if(localStorage.getItem('is_admin') === 'true'){
      
        return (
            <div>
                <AppNavbar/>
                <button onClick={()=> setToggequestion(0)}>Toggle</button>
                <Card>
                    <CardHeader onClick={() => setToggequestion(1)}>
                        <span className="font-weight-bold">Users Crud</span>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 1 ? true : false}>
                        <CardBody>
                            <UsersCrud/>
                        </CardBody>
                    </Collapse>
                </Card>
    
                <Card>
                    <CardHeader onClick={() => setToggequestion(2)}>
                        <span className="font-weight-bold">Items Crud</span>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 2 ? true : false}>
                        <CardBody>
                            <div className="users-create">
                               <ItemsCrud/>
                            </div>
                        </CardBody>
                    </Collapse>
                </Card>
                <Card>
                    <CardHeader onClick={() => setToggequestion(5)}>
                        <span className="font-weight-bold">Providers Crud</span>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 5 ? true : false}>
                        <CardBody>
                            <div className="users-create">
                              <ProvidersCrud/>
                            </div>
                        </CardBody>
                    </Collapse>
                </Card>
                <Card>
                    <CardHeader onClick={() => setToggequestion(3)}>
                        <span className="font-weight-bold">Categories Crud</span>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 3 ? true : false}>
                        <CardBody>
                            <div className="users-create">
                              Categories Crud
                            </div>
                        </CardBody>
                    </Collapse>
                </Card>
                <Card>
                    <CardHeader onClick={() => setToggequestion(4)}>
                        <span className="font-weight-bold">Carts Crud</span>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 4 ? true : false}>
                        <CardBody>
                            <div className="users-create">
                              Carts Crud
                            </div>
                        </CardBody>
                    </Collapse>
                </Card>
                <Card>
                    <CardHeader onClick={() => setToggequestion(6)}>
                        <span className="font-weight-bold">Orders Crud</span>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 6 ? true : false}>
                        <CardBody>
                            <div className="users-create">
                              Orders Crud
                            </div>
                        </CardBody>
                    </Collapse>
                </Card>
                <Card>
                    <CardHeader onClick={() => setToggequestion(7)}>
                        <span className="font-weight-bold">Bills Crud</span>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 7 ? true : false}>
                        <CardBody>
                            <div className="users-create">
                              Bills Crud
                            </div>
                        </CardBody>
                    </Collapse>
                </Card>
                <Card>
                    <CardHeader onClick={() => setToggequestion(8)}>
                        <span className="font-weight-bold">Reviews Crud</span>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 8 ? true : false}>
                        <CardBody>
                            <div className="users-create">
                              Reviews Crud
                            </div>
                        </CardBody>
                    </Collapse>
                </Card>
    
    
                
                
                
            
                </div>
        );
    } else {
        return (<h1>Admin Only!</h1>);
    }
    
    
    }
export default Admin;
       

   