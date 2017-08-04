import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, Drawer, MenuItem} from 'material-ui';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Tasks, History, Graph} from './';


export default class RouterNavigation extends Component {

  state = {
    showDrawer: true,
  }

  toggleDrawer = () => {
    console.log("SWITCH");
    this.setState({ showDrawer: !this.state.showDrawer });
  }

  navigateTo = path => {
    console.log(path);
  }

  render() {
    console.log(this.state.showDrawer);
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <div>
              <AppBar
                title="Task manager"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={this.toggleDrawer}
                />
              <Drawer
                docked={false}
                open={this.state.showDrawer}
                onRequestChange={this.toggleDrawer}
                >
                <AppBar title="Close" onLeftIconButtonTouchTap={this.toggleDrawer} />
                <MenuItem
                  primaryText="Tasks"
                  onTouchTap={() => this.navigateTo("/")}
                  containerElement={<Link to="/" />}
                  />

                <MenuItem
                  primaryText="History"
                  onTouchTap={() => this.navigateTo("/history")}
                  containerElement={<Link to="/history" />}
                  />

                <MenuItem
                  primaryText="Graph"
                  onTouchTap={() => this.navigateTo("/graph")}
                  containerElement={<Link to="/graph" />}
                  />
              </Drawer>
            </div>
            <Route exact path="/" component={Tasks} />
            <Route exact path="history" component={History} />
            <Route exact path="graph" component={Graph} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}
