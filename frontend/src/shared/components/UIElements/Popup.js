import React from 'react';

import StarRating from './StarRating';
import './Popup.css';

const Popup = props => {
    const transitionPopupOut = props => {
            const element1 = document.getElementById("popup-second");
            element1.classList.add("transition-popup-out");  
            
            const element2 = document.getElementById("popup-content");
            element2.classList.add("opacity-null");  
            
            const element3 = document.getElementById("popup-avatar");
            element3.classList.add("transition-avatar-up");    
            
            const element4 = document.getElementById("popup-main");
            element4.classList.add("background-up"); 
            
            const element5 = document.getElementById("rating-container");
            element5.classList.add("rating-container-up"); 

            const element6 = document.getElementById("form");
            element6.classList.add("form-up"); 
            
            const element7 = document.getElementById("popup-button");
            element7.classList.add("popup-button-open");     
      }
      const transitionPopupClose = props => {
            const element7 = document.getElementById("popup-main");
            element7.classList.add("popup-main-close");   
      };
    
      
    return (
        <div id="popup-main" className="popup-main">
             
             <img id="popup-avatar" className="popup-avatar drop-shadow"src="https://www.emp.fi/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw9ddf498f/images/2/5/4/6/254682-emp.jpg?sfrm=png"></img>
                <div id="popup-second" className="popup-second">
                    <div id="popup-content" className="popup-content drop-shadow">
                        <h2 className="popup-h2">How was your trip with <br></br> Peter Fehertoy?</h2>
                        <h3 className="popup-h3">Tuesday to Rovaniemi</h3>     
                    </div>      
                </div>                
                
                <div id="rating-container" className="rating-container" onClick={transitionPopupOut}>                  
                    <StarRating />    
                </div> 
                
                <div id="form" className="form">      
                    <form className="register-form">
                        <textarea 
                            placeholder="Type a cool review.." 
                            tabindex="5" 
                            required>
                        </textarea>
                        <div id="popup-button" onClick={transitionPopupClose}>
                            <h2>Send</h2>
                        </div>      
                    </form>
                </div>
        </div>        
    );
};

export default Popup;