import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../style/Style.css'
import monImage from '../images/logo.png';
export default class Header extends Component {

    render(){
        return (
            <div className="navbar">
                <div className="container d-flex justify-content-between">
                    <div className="flex-start">
                        <img src={monImage} alt='image' />
                        <span className="logo">GDS Transport
                        
                        </span>
                    </div>
                    <div className="flex-end">
                        <span className="item active">Acceuil</span>
                        <span className="item">A propos </span>
                        <span className="item">Contact </span>
                    </div>
                </div>
            </div>
               
        )
    }
}