import React, {Component} from "react";
import './AddItem.css';


class AddItem extends Component {

    state = {
        name : '',
        age : ''
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.name.value === '' || e.target.age.value === ''){
            return false;
        }
        else {
            this.props.addItem(this.state);
            this.setState({
                name : '',
                age : ''
            })
        }
    }

    render(){
        return(
            <div>
               <form onSubmit={this.handleSubmit}>
                    <input type = "text" placeholder="Enter you name" id="name" onChange={this.handleChange} value={this.state.name} />
                    <input type = "number" placeholder="Enter name.." id="age" onChange={this.handleChange} value={this.state.age}/>
                    <input type = "submit" value = "add" />
               </form>
            </div>
        )
    }

}


export default AddItem;