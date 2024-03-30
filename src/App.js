import React, { Component } from "react";
import TodoItems from "./component/TodoItems/TodoItems";

import AddItem from "./component/AddItem/AddItem";

class App extends Component {
    state = {
      items : [
        {id : 1, name : 'ahmed', age : '22'},
        {id : 2, name : 'spider', age : '30'},
        {id : 3, name : 'deepoo', age : '25'}
      ]
    }

    deleteItem = (id) => {
        console.log(id);
        let items = this.state.items;
        let i = items.findIndex(item => item.id === id)
        items.splice(i, 1);
        this.setState(items);

        // let items = this.state.items.filter(item => {
        //    return item.id !== id
        // });
        // console.log(items);
        // this.setState(items);

    }

    addItem = (item) => {
      item.id = Math.random();
       let items = this.state.items;
       items.push(item);
       this.setState({items});
    }

    render(){
      return (
        <div className="App container">
            <h1 className = "text-center" >ToDo List</h1>
            <TodoItems items = {this.state.items} 
                       deleteItem = {this.deleteItem}/>
            <AddItem addItem = {this.addItem}/>
        </div> 
      );
    }


  
}

export default App;
