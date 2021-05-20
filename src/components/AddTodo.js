import React from 'react';
import {connect} from 'react-redux';
import { addTodo } from '../redux/action';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputValue : '' };
    }

    updateTask = e => {
        this.setState({inputValue: e.target.value});
        
    }

    handleTask = () => {

        // Calling the addTodo function written in the action file along with the input value
        this.props.addTodo(this.state.inputValue);
        this.setState({inputValue: ''});
    }

    render() {
        return (
            <div>
                <input 
                    onChange={this.updateTask} 
                    type="text" 
                    value={this.state.inputValue} 
                    placeholder="Enter your todo task" 
                />
                <button onClick={this.handleTask}> Add Task</button>
            </div>
        );
    }
}

// Dispatch method: sending state -> to reducer and dispatching to use state in other files
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo : (value) => dispatch(addTodo(value))
    }
}


export default connect(null, mapDispatchToProps)(AddTodo);

// mapDispatchToProps -> sending(dispatching) data from component to redux store
// mapStateToProps -> extracting the data from redux store and displaying it in the component
