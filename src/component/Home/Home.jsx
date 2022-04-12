import React, { Component } from 'react';
import Header from './Header';
import CardBlog from '../Blog/CardBlog';
import Title from './../Partials/Title'
import Menu from './../Partials/Menu/Menu'

class Home extends Component {
    render() {
        return (
            <>
                <Menu />
                <Header />
                <section className="container-fluid">
                    <Title text="Blog" />
                    <div className="row">
                        <CardBlog />

                    </div>
                </section>
                <section id='section-newsletter' className='container-fluid'>
                    <div className="row">
                        <Title text="Newsletter" />
                    </div>
                </section>
            </>
        );
    }
}

export default Home;