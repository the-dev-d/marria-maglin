import React, { Component } from 'react';

export default class Header extends Component {

    constructor()
    {
        super();
        this.state = {
            darkmode : false
        };
        this.modeChange = (status)=>{
            if(status){
                document.querySelector(":root").style.setProperty("--theme","#121212");
                document.querySelector(":root").style.setProperty("--color","#ffffff");
                document.querySelector(":root").style.setProperty("--shadow","#ffffff3a")
                localStorage.setItem('theme','true');
            }
            else {
                document.querySelector(":root").style.setProperty("--theme","#ffffff");
                document.querySelector(":root").style.setProperty("--color","#000000");
                document.querySelector(":root").style.setProperty("--shadow","#15151568");
                localStorage.setItem('theme','false');
            }
        }
    }
    componentDidMount(){
        var dtheme = localStorage.getItem('theme');
        if(dtheme!==null)
        {
            var dmode = dtheme==="true"?true:false;
            this.setState({darkmode:dmode});
        }
        else
            localStorage.setItem('theme','false');
    }
    render() {
        return (
            <header className="flex jusbtw">
                <div className="fill" />
                <div className="tag">Marria Maglin</div> 
                <i className={this.state.darkmode?'fas fa-xs fa-sun':'fas fa-xs fa-moon'} id="mode" onClick={()=> {this.setState({darkmode : !this.state.darkmode})}} ></i>
            </header>
        )
    }
    componentDidUpdate()
    {
        console.log(this.state.darkmode);
        this.modeChange(this.state.darkmode);
    }
}
