import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{width: '22em', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '11em', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Node Project #1</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                        <CardActions border>
                            <Button colored>Live Demo</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={5} style={{width: '22em', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '11em', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Node Project #2</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                        <CardActions border>
                            <Button colored>Live Demo</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 3 */}
                    <Card shadow={5} style={{width: '22em', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '11em', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Node Project #3</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                        <CardActions border>
                            <Button colored>Live Demo</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{width: '22em', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '11em', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>React Project #1</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                        <CardActions border>
                            <Button colored>Live Demo</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={5} style={{width: '22em', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '11em', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>React Project #2</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                        <CardActions border>
                            <Button colored>Live Demo</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 3 */}
                    <Card shadow={5} style={{width: '22em', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '11em', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>React Project #3</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                        <CardActions border>
                            <Button colored>Live Demo</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{width: '22em', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '11em', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>JavaScript Project #1</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                        <CardActions border>
                            <Button colored>Live Demo</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={5} style={{width: '22em', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '11em', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>JavaScript Project #2</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                        <CardActions border>
                            <Button colored>Live Demo</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 3 */}
                    <Card shadow={5} style={{width: '22em', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '11em', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>JavaScript Project #3</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                        <CardActions border>
                            <Button colored>Live Demo</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 3) {
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{width: '22em', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '11em', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>MongoDB Project #1</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                        <CardActions border>
                            <Button colored>Live Demo</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={5} style={{width: '22em', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '11em', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>MongoDB Project #2</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                        <CardActions border>
                            <Button colored>Live Demo</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 3 */}
                    <Card shadow={5} style={{width: '22em', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '11em', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>MongoDB Project #3</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                        <CardActions border>
                            <Button colored>Live Demo</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Node</Tab>
                    <Tab>React</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;