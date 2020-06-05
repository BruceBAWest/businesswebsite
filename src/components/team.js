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
                            <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                </CardText>
                                <CardActions border>
                                    <Button colored>Get Started</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                            {/* Kushal team info card */}
                            <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                </CardText>
                                <CardActions border>
                                    <Button colored>Get Started</Button>
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