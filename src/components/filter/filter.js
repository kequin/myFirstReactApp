import React, {Component} from 'react';
import './filter.css';

export default class Filter extends Component {
    
    render(){

        return(
            <div class='main-div-filter'>
                <ul >
                    <li>
                        all
                    </li>
                    <li>
                        done
                    </li>
                    <li>
                        not done
                    </li>
                </ul>
            </div>
        )
    }
}