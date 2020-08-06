import React, { Component } from 'react';
import logo from '../svg/logo2.PNG';
import "../css/header.css";
import {NavLink} from 'react-router-dom';
//import styled from 'styled-components'; 
import {Icon} from 'react-icons-kit';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right'

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-top">
                <img src={logo} />
                <btn className ="signIn-btn">Sign In 
                 
                </btn>
                </div>

                {/*Header Content*/}

                <div className="header-content">
                    <h1>Change Your Bussiness Trents</h1>
                    <h2>Work With Us Anywhere,Anytime</h2>
                    <button className="main-offer-btn">Hire Us
                    <Icon className='icon' icon={ic_keyboard_arrow_right} size ={40} />
                    </button>
                    </div>
            </div>
        )
    }
}


export default Header;


//Header Container
  /*const HeaderComponent = styled.div`
    .signIn-btn {
        right:0;
        margin: 1.125rem 3% 0;
        padding:0.4375rem 1.0625rem;
        font-weight:400;
        line-height:normal;
        border-radius:0.1875rem;
        font-size:1rem;
        background: var(--main-red);
        position:absolute;
        translate: transform(-50%, -50%)
        cursor: pointer;
        transition: background 0.3s ease-in;
    }





`*/