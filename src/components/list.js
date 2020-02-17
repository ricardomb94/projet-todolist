"use-strict";

import React from 'react';
import { Button,Input,FormGroup } from 'reactstrap';



 
class List extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputvalue: "",
            tasks: [],
            done:false
        };
        
        const date = new Date();
        console.log(date)
        // vos bind etc...
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this); 
        // this.AddTask = this.AddTask.bind(this); 
    }

    handleChange = event => {
        // console.log(event.target.value)
        this.setState({
            inputvalue: event.target.value
        }, () => console.log(this.state.inputvalue));
    }
    
    handleClick =event =>{
        event.preventDefault();
        this.setState({
        inputvalue:"",
            tasks: [...this.state.tasks, this.state.inputvalue]
        });
    }
    
    deleteTask = event => {
        event.preventDefault();
        const array = this.state.tasks;
        const index = array.indexOf(event.target.value);
        array.splice(index,1);
        this.setState({
            tasks: array
        });
    }
   
    
    render() {
        return (
            <div className="container">
                    <FormGroup >
                        <Input 
                        value={this.state.inputvalue} 
                        type="text" 
                        className="form-control" 
                         
                        onChange={this.handleChange}
                        />
                            <Button color="danger"
                            type="button" 
                            onClick={this.handleClick}>Add task</Button>
                            {
                                this.state.tasks.map((task, i) => {
                                    return (
                                        <div key={i}
                                            className="btnsup"
                                        >{task}</div>
                                    
                                    )
                                })
                            }
                    </FormGroup>
            </div>
        );
    }
}

export default List;

