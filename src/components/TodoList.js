import React from 'react';
import {connect} from 'react-redux';
import Todo from "./Todo";

class TodoList extends React.Component {
    render() {
        return this.props.loadTodo?.map((item, index) => {
            return <ul><Todo task={item} /></ul>
        })
    }
}

// Method for fetching the data from the store and assiging it to toDo and to access it -> this.props.toDo
const mapStateToProps = (state) => {
    return {
        loadTodo: state.loadTodo,
    }
}


export default connect(mapStateToProps, null)(TodoList);