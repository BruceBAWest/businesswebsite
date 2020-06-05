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
                <Card shadow={5} style={{width: '20em', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '11em', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Node Project 1</CardTitle>
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
            )
        } else if(this.state.activeTab === 1) {
            return (
                <div><h1>This is React</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div><h1>This is JavaScript</h1></div>
            )
        } else if(this.state.activeTab === 3) {
            return (
                <div><h1>This is MongoDB</h1></div>
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
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;