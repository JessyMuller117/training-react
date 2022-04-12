import React, { Component } from 'react';
import data from "./../../data.json"


class CardBlog extends Component {
    render() {
        return (
            <>
                {
                    data.map((title, t) => {
                        return (
                            <div className="col-4">
                                <div className='card'>
                                    <img src={title.imgUrl} class="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className='card-title' key={t}>{title.title}</h5>
                                        <p className="card-text">{title.contenttext}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        );
    }
}

export default CardBlog;