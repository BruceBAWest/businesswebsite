import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div className="about-grid">
                {/* Bruce team info card */}
                <Card shadow={5} style={{width: '70%', margin: 'auto', marginTop: '1em'}}>
                    <CardTitle className="center-about-image">
                        <img 
                            src="https://bruces-public-bucket.s3.amazonaws.com/everest-consulting-logo.jpg"
                            alt="everest-logo.png"
                        />
                    </CardTitle>
                    {/* bruce name */}
                    <CardText className="about-heading">
                        <h2>Everest Consulting, Ltd.</h2>
                        <p>A Software Development Consultancy</p>
                    </CardText>
                    {/* dotted hr line break for style */}
                    <hr/>
                    {/* Bruce bio */}
                    <CardText className="about-bio">
                        <p>
                            Everest Consulting is a fictional Software Development Consultancy specializing in slapping together
                            JavaScript websites using a MERN stack (which uses MongoDB, Express, React & NodeJS), even though the 
                            developers have no idea what they're doing.
                        </p>
                        <p>
                            Some of our "skills" include: JavaScript, NodeJS, ReactJS, MongoDB, Express, HTML/CSS
                        </p>
                    </CardText>
                </Card>
            </div>
        )
    }
}

export default About;