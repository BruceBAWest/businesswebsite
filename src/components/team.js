import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardMenu, CardActions, Button, IconButton } from 'react-mdl';

class Resume extends Component {
    render() {
        return(
            <div className="team-page">
                <Grid>
                    <Cell col={12}>
                        <div className="team-grid">
                            {/* Bruce team info card */}
                            <Card shadow={5} style={{width: '30em', margin: 'auto'}}>
                                <CardTitle className="team-image" style={{height: '30em'}}> <img src="https://bruces-public-bucket.s3.amazonaws.com/brucebawest-avatar.jpg" alt="Bruce Avatar"/></CardTitle>
                                {/* bruce name */}
                                <CardText className="team-names">
                                    <h2>Bruce B. A. West</h2>
                                    <p>Co-Founder</p>
                                </CardText>
                                {/* dotted hr line break for style */}
                                <hr/>
                                {/* Bruce bio */}
                                <CardText className="team-bio">
                                    <p>
                                        Bruce is an Army veteran, and a former Software Development Engineer - Military Apprentice
                                        at Amazon Web Services. AWS "parted ways" with him because he was terrible 
                                        at JavaScript. He co-founded Everest Consulting, Ltd to cover his mortgage.
                                        PS: Seattle real estate is incredibly expensive.
                                    </p>
                                </CardText>
                                {/* bruce links */}
                                <CardActions className="team-links" border>
                                    <Button className="team-buttons" colored>
                                        <a href="https://www.linkedin.com/in/brucebawest/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
                                    </Button>
                                    <Button className="team-buttons" colored>
                                        <a href="https://github.com/BruceBAWest" rel="noopener noreferrer" target="_blank">GitHub</a>
                                    </Button>
                                    <Button className="team-buttons" colored>
                                        <a href="http://brucebawest.com/" rel="noopener noreferrer" target="_blank">Portfolio</a>
                                    </Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                            {/* Kushal team info card */}
                            <Card shadow={5} style={{width: '30em', margin: 'auto'}}>
                                {/* Kushal image */}
                                <CardTitle className="team-image" style={{height: '30em'}}>
                                    <img src="https://bruces-public-bucket.s3.amazonaws.com/IMG_3195.JPG" alt="Kushal Avatar"/>
                                </CardTitle>
                                {/* Kushal name */}
                                <CardText className="team-names">
                                    <h2>Kushal Sapkota</h2>
                                    <p>Co-Founder</p>
                                </CardText>
                                {/* dotted hr line break */}
                                <hr/>
                                {/* Kushal bio */}
                                <CardText className="team-bio">
                                    <p>
                                        Kushal is an Army veteran, and a brilliant Software Development Engineer - Military Apprentice at Amazon Web Services. 
                                        He has no regard for his non-compete clause with Amazon, however, and he wants that money, so he co-founded Everest Consulting, Ltd
                                        with his former co-worker, Bruce. Don't tell anyone. 
                                    </p>
                                </CardText>
                                {/* Kushal links */}
                                <CardActions border>
                                    <div className="team-links">
                                    <Button className="team-buttons" colored>
                                        <a href="https://www.linkedin.com/in/kushal-s-807ab6175/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
                                    </Button>
                                    <Button className="team-buttons" colored>
                                        <a href="https://github.com/kushkota" rel="noopener noreferrer" target="_blank">GitHub</a>
                                    </Button>
                                    <Button className="team-buttons" colored>
                                        <a href="https://gurushots.com/kushkota2015/photos" rel="noopener noreferrer" target="_blank">Portfolio</a>
                                    </Button>
                                    </div>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;