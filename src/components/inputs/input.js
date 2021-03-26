import React, {Component} from 'react';
import './input.css';
import apply from "./TickSquare.png";
import search from './Search.png';
export default class Input extends Component {

  state = {
    label: '',
    label2: ''
  }

  onlablechange = (e) => {
      this.setState({
        label: e.target.value
      })
    }
    onlablechange2 = (e) => {
      this.setState({
        label2: e.target.value
      })
      this.props.onSearch(this.state.label2);
    }
    onSubmit = (e) => {
      e.preventDefault(); //не перезагружает страницу при отправки формы
      this.props.onAddItem(this.state.label)
      this.setState({
        label: ''
      })
    }
    onSubmitwo = (e) => {
      e.preventDefault();
    }
    render() {
      const inputext = 'Искать';
      const inputext2 = 'Добавить';
      return (
        <div>
          <form type="text" onSubmit={this.onSubmitwo}>
            <input value={this.props.label2} onChange={this.onlablechange2} placeholder={inputext}></input>
            <button><img src={search} alt="search"></img></button>
          </form>
          <form type="text" onSubmit={this.onSubmit}>
            <input placeholder={inputext2} onChange={this.onlablechange} value={this.state.label}></input>
            <button className="apply"><img src={apply} alt="apply"></img></button>
          </form>
        </div>
      );
    }
  } 
