import React, { Component } from 'react';


class Title extends Component {
    render() {
        return <h2 className='h2 titre-h2'>{this.props.text}</h2>
    }
}

export default Title;