import React, { Component } from 'react';
import './App.css';
import TaskForm from './Compenents/TaskForm';
import Control from './Compenents/Control';
import TaskList from './Compenents/TaskList';
import { connect } from 'react-redux';
import * as actions from './Actions/index';

class App extends Component {
  
  OnshowDiglog = () => {
    const { taskEditing } = this.props;
    if(taskEditing && taskEditing.id !== ''){
      this.props.onOpenForm();
    }else{
      this.props.onToggleForm();
    }
    this.props.onClearForm({
      id: '',
      name: '',
      status: false
    })
  }

  render() {
    const { isDisplayForm } = this.props;
    
    return (

      <div className="container mt-15">

        <h1>Quản Lý Công Việc</h1><hr />

        <div className="row mt-15">
        <TaskForm />
          <div className={isDisplayForm === true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button
              type="button"
              className="btn btn-primary "
              onClick={this.OnshowDiglog}
            >
              Thêm Công Việc
            </button>

            <Control />
            <TaskList />
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    isDisplayForm: state.isDisplayForm,
    taskEditing: state.taskEditing
  };
}

const  mapDispatchToProps = (dispatch, props) => {
  return{
    onToggleForm: () =>{
      dispatch(actions.toggleForm())
    },
    onClearForm: (task) => {
      dispatch(actions.editTask(task))
    },
    onOpenForm: () => {
        dispatch(actions.openForm())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
