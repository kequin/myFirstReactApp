import React from "react";
import './todo-list-item.css';
import star from "./icons/Star.png";
import Delete from "./icons/Delete.png";
// const Todolistitemfunc = (props) => {
//     const style = {
//         color: props.important ? 'red' : 'black'
//     }
//     return (
//         <span style={ style }>{ props.label }</span>
//     );
// }

class Todolistitem extends React.Component {

    onclick = () => {
        const { onImportant } = this.props;
        onImportant();
    }
    render (){// в классе надо прописывать render для рендера(логично) внутри него можно обьявлять переменные но выше написано как описывать функции
        // const { important, label } = this.props; можно так же вот так
        const { label, onDeleted, doNe, done, important } = this.props;
        let linethrought = '';
        if(done) {
            linethrought += ' done'
        };
        const style = {
            color: important ? 'rgb(0, 238, 255)' : 'white',
            cursor:'pointer'
        };
        const stairstyle = {
            boxShadow: important ? '0 0 10px #FAC863' : '0 0 0px #fff',
            marginLeft: '2px',
        }
        return (//надо писать this перед названием функции
            <div>
                <div className={linethrought} onClick={doNe} style={ style }>{ label }</div>
                <div className="buttonsdiv">
                    <button className="margin" onClick={onDeleted}><object data={Delete}>b</object></button>
                    
                    <button style={stairstyle} className="margin" onClick={this.onclick}><object data={star}>b</object></button>
                </div>
            </div>
        );
    }
};

/* 
const Todolistitem = ({ label }) => {
    return (
        <span>{ label }</span>
    );
} 
тоже самое
*/


export default Todolistitem;