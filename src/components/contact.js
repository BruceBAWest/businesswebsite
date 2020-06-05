import React, { Component } from 'react';
import { Grid, Cell, List, ListItem } from 'react-mdl';

class Resume extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <img 
                            src="https://bruces-public-bucket.s3.amazonaws.com/everest-consulting-logo.jpg"
                            alt="everest-logo.jpg"
                        />
                        <h2>Everest Consulting, Ltd.</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Us</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem className="list-item">
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        <h2>
                                            (555) 867-5309
                                        </h2>
                                </ListItem>
                                <ListItem className="list-item">
                                        <i className="fa fa-fax" aria-hidden="true"/>
                                        <h2>
                                            (555) 123-4567
                                        </h2>
                                </ListItem>
                                <ListItem className="list-item">
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                        <h2>
                                            contact@fakebusiness.com
                                        </h2>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;