import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, Drawer, MenuItem} from 'material-ui';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Tasks, History, Graph} from './';


export default class RouterNavigation extends Component {

  state = {
    showDrawer: false,
  }

  toggleDrawer = () => {
    this.setState({ showDrawer: !this.state.showDrawer });
  }

  navigateTo = path => {
    this.toggleDrawer();
  }

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <AppBar
              title="Task manager"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              onClick={this.toggleDrawer}
              />
            <Drawer
              docked={false}
              open={this.state.showDrawer}
              onRequestChange={this.toggleDrawer}
              >
              <AppBar title="Menu" onClick={this.toggleDrawer} />
              <MenuItem
                primaryText="Tasks"
                onClick={() => this.navigateTo("/")}
                containerElement={<Link to="/" />}
                />

              <MenuItem
                primaryText="History"
                onClick={() => this.navigateTo("/history")}
                containerElement={<Link to="/history" />}
                />

              <MenuItem
                primaryText="Graph"
                onClick={() => this.navigateTo("/graph")}
                containerElement={<Link to="graph" />}
                />
            </Drawer>
            <Route exact path="/" component={Tasks} />
            <Route path="/history" component={History} />
            <Route path="/graph" component={Graph} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}
