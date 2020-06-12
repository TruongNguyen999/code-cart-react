import React, { Component } from 'react';
import '../index.css';
import { connect } from 'react-redux';
import * as actions from '../Actions/index';

class Sort extends Component {
    onSort = (sortName) => {
        this.props.onSortControl(sortName);
    }
    render() {
        return (
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <button type="button" className="btn btn-primary" onClick={() => (this.onSort('name'))}>Xắp Xếp</button>
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
        onSortControl: (sortname) => {
            dispatch(actions.sortControl(sortname))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sort);