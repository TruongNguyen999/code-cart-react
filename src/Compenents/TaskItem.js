import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions/index';

class TaskItem extends Component {
    OnsetStatus = () => {
        console.log(this.props.tasks.id);
        
        this.props.onUpdateStatus(this.props.tasks.id);
    }
    onClear = () => {
        this.props.onDeleteTask(this.props.tasks.id);
        this.props.onCloseForm();
    }
    onUpdate =() => {
        this.props.onOpenForm();
        this.props.onEditing(this.props.tasks);
    }
    render() {
        const { tasks, index } = this.props;
        
        return (
            <tr>
                <th>{index + 1}</th>
                <th>{tasks.name}</th>
                <th>
                    <button type="button" className={tasks.status === true ? 'btn btn-success' : 'btn btn-danger'} onClick={this.OnsetStatus}>{tasks.status === true ? 'kích Hoạt' : 'Ẩn'}</button>
                </th>
                <th>

                    <button type="button" className="btn btn-success" onClick={this.onUpdate}>Sửa</button>&nbsp;
                    <button type="button" className="btn btn-success" onClick={this.onClear}>Xóa</button>

                </th>
            </tr>
        );
    }
}

const mapStateToProps = state => {
    return{

    };
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id))
        },
        onDeleteTask: (id) => {
            dispatch(actions.deletetask(id))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        },
        onOpenForm: () => {
            dispatch(actions.openForm())
        },
        onEditing: (task) => {
            dispatch(actions.editTask(task))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);