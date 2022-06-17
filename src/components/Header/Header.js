/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div class="topnav">
                    <img src={process.env.PUBLIC_URL + "/images/Atekulla_Basmulla Avatar.png"} width="45" height="45" alt="Avatar" />
                    &nbsp;
                    <a><NavLink to="/Home" exact activeclassname='active'><i class="fa fa-fw fa-home"></i>Home</NavLink></a>
                    &nbsp;
                    <a>Instagram &nbsp; <a href="https://www.instagram.com/basmulla_7/" alt-="Instagram"><i class="fa fa-instagram"></i></a></a>
                    &nbsp;
                    <a>Facebook &nbsp; <a href="https://www.facebook.com/bismullah.atekulla/" alt="Facebook"><i class="fa fa-facebook"></i></a></a>
                    &nbsp;
                    <a>Twitter &nbsp; <a href="https://twitter.com/7Basmulla/" alt="Twitter"><i class="fa fa-twitter"></i></a></a>
                </div>
            </header>
        );
    }
}

export default Header;