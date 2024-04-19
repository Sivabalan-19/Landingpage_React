import React, { Component } from "react";
import "./Img.css"
 
class Img extends Component {
    render() {
        const myStyle = {
            backgroundImage:
            "url('https://github.com/Sivabalan-19/Landing_Page/blob/main/trave.jpg?raw=true')",
            height: "100vh",
            marginTop: "-70px",
            fontSize: "50px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        };

        
        return (
            <div>
            <div style={myStyle}></div>
            <h1 className="h1">EXPLORE THE WORLD <br></br> WITH TRAVELER</h1>
            </div>
        );
    }
}
 
export default Img;