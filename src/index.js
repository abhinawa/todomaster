import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

// hello this is index

class Addtask extends React.Component{
    render(){
        return(
            <div> Add a task</div>
        )
    }
}

class TaskList extends React.Component{
    render(){

        return(
          <div>  
                <div>{this.props.purpose}</div>
                <div>{this.props.desc}</div>
          </div>
        )
    }
}

class App extends React.Component{
    render(){
        const name="abhinav"

        return(
            <div>
                <Addtask/>
                <TaskList purpose="Task to do"  desc="for task that are still to be done"/>
                <TaskList purpose="Finished tasks" desc ="for task that has been finished"/>
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById("root"));
