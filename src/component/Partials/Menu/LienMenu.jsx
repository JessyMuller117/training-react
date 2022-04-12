import React, { Component } from 'react';

function Lien(props){
    return <li className='nav-item'>{props.lienMenu}</li>
}

class LienMenu extends Component {
    render() {
        return (
            <ul className='navbar-nav menu-principal'>
                <Lien lienMenu="Accueil" />
                <Lien lienMenu="A Propos" />
                <Lien lienMenu="Réalisation" />
                <Lien lienMenu="Contact" />
            </ul>
        );
    }
}

export default LienMenu;