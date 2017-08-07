import React, { Component } from 'react';
import {Dialog, FlatButton, TextField, Slider, SelectField, MenuItem} from 'material-ui';


export default class TaskDialog extends Component {

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
        onClick={this.props.onPressClose}
        />,
      <FlatButton
        label="Save"
        primary
        onClick={this.props.onPressSave}
        />,
    ];

  render() {
    return (
      <div>
        <Dialog
          title={this.props.currentTask.isNew ? "Create task" : "Edit task"}
          actions={this.actions}
          open={this.props.open}
          onRequestClose={this.props.onPressClose}
          autoScrollBodyContent
          modal
          >
          <br />

          <TextField
            hintText="Title"
            floatingLabelText="Title"
            value={this.props.currentTask.title}
            onChange={this.props.onChangeTitle}
            />
          <br />

          <TextField
            hintText="Description"
            floatingLabelText="Description"
            multiLine={true}
            rows={2}
            value={this.props.currentTask.description}
            onChange={this.props.onChangeDescription}
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
