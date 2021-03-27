import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Header from "./components/headerp/header";
import Input from "./components/inputs/input";
import Todolist from "./components/todolist/todo-list";

export default class App extends Component {
  state = {
    todoList: [
      // { label: "Выпить кофе", important: false, id:1},
      { label: "Выкинуть мусор", done: false, important: true, id:1},
      { label: "Создать новый амазон", done: false, important: false, id:2},
      { label: "Создать новый фейсбук", done: false, important: false, id:3}
    ],
    todoListcopy: ''
  }
  DeletedFun = (id) => {
    this.setState(({todoList}) => {
      const idel = todoList.findIndex((el) => el.id === id)//ищется el.id который равен id например эта функция вернет 3 если id = 4 
      const before = todoList.slice(0, idel);
      console.log(before);
      const after = todoList.slice(idel+1);
      const newarr = [...before, ...after];
      return {
        todoList: newarr
      }
    })
  } 
  onAddNewItem = (text) => {
     if(text.length === 0) {
       alert('эта заметка пустая!');
     } else {
      this.setState(({todoList}) => {
        let newid;
        if(todoList.length === 0){
          newid = 1;
        } else if(todoList.length === 1){
          newid = 2
        } else {
          newid = todoList.length+1;
        }
        const el = {
          label: text,
          important: false,
          id: newid
        }
        console.log(el);  
        const important = [];
        const notimportant =[];
        
        for (let i = 0; i < todoList.length; i++) {
          let list = todoList[i];
          if(list.important) important.unshift(list) 
          else if(!list.important) notimportant.push(list);
        }
        notimportant.unshift(el);
        const result = [...important, ...notimportant];
        return {todoList:result}

      })
     }
  }

  Done = (id) => {
    this.setState(({todoList}) => {
      const copytodolist = todoList;
      const thisel = todoList.findIndex((el) => el.id === id);
      copytodolist[thisel].done = !copytodolist[thisel].done;
      console.log(copytodolist[thisel].done)
      
      return {todoList:copytodolist}
    })
  }

  Search = (text) => {
    this.setState(({todoListcopy}) => {
        return { todoListcopy: text }
      
    })
    console.log(text)
  }

  onImportant = (id) => {
    this.setState(({todoList}) => {
      const idimportant = todoList.findIndex((el) => el.id === id)
      // const importantel = todoList.findIndex((el) => el.important === important)
      todoList[idimportant].important = !todoList[idimportant].important;
      const important = [];
      const notimportant =[];
      
      for (let i = 0; i < todoList.length; i++) {
        let list = todoList[i];
        if(list.important) important.unshift(list) 
        else if(!list.important) notimportant.push(list);
      }
      
      const result = [...important, ...notimportant];
      
      return {todoList:result}
    })
  }
  

  Searchel(items, todoListcopy) {
    console.log(todoListcopy)
    return items.filter((item) => { 
         return item.label.toLowerCase().indexOf(todoListcopy.toLowerCase()) > -1
       });
  }

  render () {
    let visibleitems = this.Searchel(this.state.todoList, this.state.todoListcopy);
    return (
      <div className="style">
        <Header />
        <Input onSearch={this.Search} onAddItem={ this.onAddNewItem }/>
        <Todolist todos = {visibleitems}
        onDeleted={ this.DeletedFun }
        onImportant={ this.onImportant}
        doNe={ this.Done}
          />
      </div>
    );
  }
}
// так же вместо jsx можно писать вот так React.createElement('h1', null, 'hiii');

ReactDOM.render(<App/>, document.getElementById('root'));

reportWebVitals();