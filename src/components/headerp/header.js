import React, {Component} from 'react';
import './headerh1.css';

export default class Header extends Component {
    done = (arr) => {
      let perem = 0;
      for(let i = 0; i<arr.length; i++){
        if(arr[i].done){
          perem++;
        } else {

        }
      }
      return perem
    }
    render(){
      const {arrayalltodos} = this.props;
      return (
        <h1 className="center">Заметки, {this.done(arrayalltodos)} выполнено из {arrayalltodos.length}</h1>

      )
    }
}