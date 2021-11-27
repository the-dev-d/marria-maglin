import React, { Component } from 'react'
import './posts.css';
export default class Posts extends Component {
    constructor()
    {
        super();
        this.pic = {
            im1 : './Images/p1.jpg',
            im2 : './Images/p2.jpg',
            im3 : './Images/p3.jpg'
        }
        this.render = this.render.bind(this);
    }
    render() {
        return (
            <div className="posts">
                <div className="postseg">
                    <img className="postpic" src={require('./Images/p1.jpg').default} data-aos="flip-left" alt="" />
                    <div className="desc" data-aos="fade-up">Some catchy captions goes here this is a place holder</div>
                </div>

                <div className="postseg">
                    <div className="desc" data-aos="fade-down">Some catchy captions goes here this is a place holder</div>
                    <img className="postpic" src={require('./Images/p2.jpg').default} data-aos="flip-left" alt="" />
                </div>

                <div className="postseg">
                    <img className="postpic" src={require('./Images/p3.jpg').default} data-aos="flip-left" alt="" />
                    <div className="desc" data-aos="fade-up" >Some catchy captions goes here this is a place holder</div>
                </div>
            </div>
        )
    }
}
