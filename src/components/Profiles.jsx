import React, { Component } from 'react'
import maglin1 from './Images/maglin.jpg'
import maglin2 from './Images/maglin2.jpg'
export default class Profiles extends Component {
    render() {
        return (
            <div>
                <div className="wrapper2">
                    <a href="https://www.instagram.com/m_a_g_l_i/" data-aos="slide-right" className="card">
                        <div className="profile">
                            <img src={maglin1} alt=""/>
                        </div>
                        <div className="instaname"> m_a_g_l_i <br/> <br/>
                            <p>My Professional Instagram page</p>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/mag_li_n/" data-aos="slide-left" className="card" >
                        <div className="profile">
                            <img src={maglin2} alt=""/>
                        </div>
                        <div className="instaname">mag_li_n
                            <br/> <br/>
                            <p>My Personal Instagram Account</p>
                        </div>
            
                    </a>    
                </div>
            </div>
        )
    }
}
