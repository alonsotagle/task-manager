import React, { Component } from 'react';
import {Dialog, FlatButton, TextField, AutoComplete} from 'material-ui';


export default class TaskDialog extends Component {

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
            multiLine
            rows={2}
            value={this.props.currentTask.description}
            onChange={this.props.onChangeDescription}
            />
          <br />

          <AutoComplete
            floatingLabelText="Duration"
            filter={AutoComplete.noFilter}
            openOnFocus
            dataSource={["30", "45", "60"]}
            onUpdateInput={this.props.onChangeDuration}
            />
        </Dialog>
      </div>
    );
  }
}
