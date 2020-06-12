import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions/index';

class Seach extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywork: ''
        }
    }
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    }
    onSearch = () => {
        this.props.onSearchControl(this.state.keywork);
    }
    render() {
        let { keywork } = this.state;
        return (
            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập Từ Khóa ...."
                        name="keywork"
                        value={keywork}
                        onChange={this.onChange}
                    />
                    <span className="input-group-btn">
                        <button type="button" className="btn btn-primary" onClick={this.onSearch}>Tìm</button>
                    </span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{

    };
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        onSearchControl: (keywork) => {
            dispatch(actions.searchControl(keywork))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Seach);