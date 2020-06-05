import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>  
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://bruces-public-bucket.s3.amazonaws.com/everest-consulting-logo.svg"
                            alt="everest-logo"
                            className="landing-image"
                        />
                        <div className="banner-text">
                            <h1>Everest Consulting</h1>
                            <hr/>
                            <h2>A Software Development Consultancy</h2>
                            <hr/>
                            <p>
                                Java | JavaScript | NodeJS | ReactJS | MongoDB | HTML/CSS
                            </p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;