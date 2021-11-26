import React, { Component } from 'react'
import image1 from './Images/image1.jpg';
import image2 from './Images/image2.jpg';
import image3 from './Images/image3.jpg';
import image4 from './Images/image4.jpg';
import image5 from './Images/image5.jpg';
import image6 from './Images/image6.jpg';
import image7 from './Images/image7.jpg';
import image8 from './Images/image8.jpg';
import image9 from './Images/image9.jpg';
import image10 from './Images/image10.jpg';
export default class Picwall extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="picwall">
                        <div className="row flex alignbase">
                            <div className="cell">
                                <img src={image3} alt="" />
                            </div>
                            <div className="cell" style={{transform:'translate(0% ,-30%)'}}>
                                <img src={image2} alt="not load" />
                            </div>
                            <div className="cell">
                                <img src={image6} alt="" />
                            </div>
                            <div className="fillcell">
                                <img src={image7} alt="" />
                            </div>
                        </div>
                        <div className="row2 flex justcent">
                            <div className="startcol">
                                <div className="cell2">
                                    <img src={image5} alt="" />
                                </div>
                                <div className="cell2" style={{transform:'translate(-30%,0%)'}}>
                                    <img src={image8} alt="not load" />
                                </div>
                                <div className="cell2">
                                    <img src={image4} alt="" />
                                </div>
                            </div>
                            <div className="cent flex justcent">
                                <img src={image1} alt="" />
                            </div>
                            <div className="endcol">
                                <div className="cell3">
                                    <img src={image9} alt="" />
                                </div>
                                <div className="cell3">
                                    <img src={image10} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="quoteswall flex justcent" data-aos="fade-up" data-aos-duration="4000">
                        <p> <b>ART </b> is something that makes you breathe with a different kind of happiness. </p>
                    </div>
                </div>
            </div>
        )
    }
}
