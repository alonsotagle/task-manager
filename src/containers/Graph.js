import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
var BarChart = require('react-d3-basic').BarChart;


class Graph extends Component {

  render() {
    return (
      <div>
        {this.props.tasks.length > 0 ?
          <BarChart
            title="Completed tasks chart"
            data= {this.props.tasks}
            width= {700}
            height= {500}
            chartSeries= {[{field: 'state', name: 'Completed',}]}
            x = {element => element.duration}
            xLabel={"Tasks"}
            xScale="ordinal"
            yTicks={[1, ""]}
            yLabel ={"State"}
            />
          :
          <b>No Tasks</b>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
  }
}

export default withRouter(connect(mapStateToProps)(Graph));
