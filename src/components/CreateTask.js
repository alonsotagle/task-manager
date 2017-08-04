import React, { Component } from 'react';
import {Dialog, FlatButton, TextField, Slider, SelectField, MenuItem} from 'material-ui';


export default class CreateTask extends Component {

  isDurationDefault = () => {
    const defaultDuration = [30, 45, 60];

    const durationIsDefaultValue = this.props.currentTask.duration &&
      defaultDuration.some(item => item === this.props.currentTask.duration);

    return durationIsDefaultValue;
  }

  actions = [
      <FlatButton
        label="Cancel"
        secondary
        onClick={this.props.onPressSaveNewTask}
        />,
      <FlatButton
        label="Save"
        primary
        onClick={this.props.onPressSaveNewTask}
        />,
    ];

  render() {
    return (
      <div>
        <Dialog
          title="Create a new task"
          actions={this.actions}
          open={this.props.open}
          onRequestClose={this.props.onPressSaveNewTask}
          autoScrollBodyContent
          modal
          >

          Fill the fields to create a new task
          <br />
          <TextField
            hintText="Title"
            floatingLabelText="Title"
          />
          <br />

          <TextField
            hintText="Description"
            floatingLabelText="Description"
            multiLine={true}
            rows={2}
          />
          <br />

          <SelectField
            floatingLabelText="Duration"
            value={this.props.currentTask.duration}
            onChange={this.props.onChangeDuration}
            >
            <MenuItem value={1} primaryText="30 min" />
            <MenuItem value={2} primaryText="45 min" />
            <MenuItem value={3} primaryText="60 min" />
            <MenuItem value={4} primaryText="Other" />
          </SelectField>

          {this.isDurationDefault() &&
            <Slider
              min={0}
              max={180}
              step={1}
              />
          }
        </Dialog>
      </div>
    );
  }
}
