import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from '../Actions/index';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }
    onChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        let filter = {
            name: name === 'filterName' ? value : this.state.fiterName,
            status: name === 'filterStatus' ? value : this.state.filterStatus
        }
        this.props.onFilterTable(filter);       
        this.setState({
            [name]: value
        });
    }
    render() {
        let { tasks, filterTable, searchControl, sortControl } = this.props;
        
        if (filterTable.name) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1;
            });
        }

        tasks = tasks.filter((task) => {
            if (filterTable.status === -1) {
                return task;
            } else {
                return task.status === (filterTable.status === 1 ? true : false);
            }
        });

        if (searchControl.keywork) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(searchControl.keywork.toLowerCase()) !== -1;
            })
        }

        if (sortControl.sortname === 'name') {
            tasks.sort((a, b) => {
                if (a.name > b.name) return 1;
                else if (a.name < b.name) return -1;
                else return 0;
            })
        }
        
        const elmtasks = tasks.map((tasks, index) => {
            return <TaskItem key={tasks.id} index={index} tasks={tasks} />
        })

        return (
            <table className="table table-bordered table-hover mt-15">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Trạng Thái</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th></th>
                        <th>
                            <input
                                type="text"
                                className="form-control"
                                name="filterName"
                                onChange={this.onChange}
                            />
                        </th>
                        <th>

                            <select
                                name="filterStatus"
                                className="form-control"
                                onChange={this.onChange}
                            >
                                <option value={-1}>Tất Cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích Hoạt</option>
                            </select>

                        </th>
                        <th></th>
                    </tr>
                    {elmtasks}

                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        filterTable: state.filterTable,
        searchControl: state.filterControl,
        sortControl: state.sortControl
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterTable: (filter) => {
            dispatch(actions.filterTable(filter))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
