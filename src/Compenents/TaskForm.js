import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../Actions/index';


class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        };
    }
    componentWillMount() {
        if (this.props.taskEditing) {
            this.setState({
                id: this.props.taskEditing.id,
                name: this.props.taskEditing.name,
                status: this.props.taskEditing.status
            });
        }else{
            this.setState({
                id: '',
                name: '',
                status: false
            });
        }
    }
    componentWillReceiveProps(nextprops) {        
        if (nextprops && nextprops.taskEditing) {
            this.setState({
                id: nextprops.taskEditing.id,
                name: nextprops.taskEditing.name,
                status: nextprops.taskEditing.status
            });
        } else if (!nextprops) {
            this.setState({
                id: '',
                name: '',
                status: false
            });
        }
    }
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false
        }
        this.setState({
            [name]: value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAddTask(this.state);
        this.props.onCloseForm();
        this.onClear();
    }
    onClear = () => {
        this.setState({
            name: '',
            status: false
        });
    }
    render() {
        
        const { id } = this.state;
        
        if(!this.props.isDisplayForm) return '';
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3 className="panel-title">{id === '' ? 'Thêm Công Việc' : 'cập nhật công việc'}</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Tên : </label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="nhập tên...."
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Trạng Thái : </label>
                                <select
                                    className="form-control"
                                    name="status"
                                    value={this.state.status}
                                    onChange={this.onChange}
                                >
                                    <option value={true}>Kích Hoạt</option>
                                    <option value={false}>Ẩn</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Lưu</button>&nbsp;
                             <button type="button" className="btn btn-primary" onClick={this.onClear}>Hủy Bỏ</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
       isDisplayForm: state.isDisplayForm,
       taskEditing: state.taskEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask: (task) => {
            dispatch(actions.addTask(task))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);

