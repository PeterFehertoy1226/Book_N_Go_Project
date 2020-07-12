import React from "react";





class Color extends React.Component {



  constructor() {
    super();
    this.state = {
      checked:false,
    
      themes: [
        {
          primary: "#1f1f1f",
          menu: "",
          panel: "",
          button: "",
          fontSize: "10px"
        },
        {
          primary: "#289dff",
          menu: "#f9faff",
          panel: "#f9faff",
          fontColor: "#2e437a", 
          button: "#289dff",
          fontSize: "10px"
      
        },
        {
          primary: "blue",
          fontSize: "30px"
        }
      ],
      defaultTheme: 0
    };
  }



  changeTheme = e => {
    this.setState({ value: e.target.value });

    document.documentElement.style.setProperty(
      "--primary-color",
      this.state.themes[e.target.value].primary
    );
    document.documentElement.style.setProperty(
      "--menu-color",
      this.state.themes[e.target.value].menu
    );
    document.documentElement.style.setProperty(
      "--font-color",
      this.state.themes[e.target.value].fontColor
    );
    document.documentElement.style.setProperty(
      "--button-color",
      this.state.themes[e.target.value].button
    );
    document.documentElement.style.setProperty(
      "--panel-color",
      this.state.themes[e.target.value].panel
    );
   

  };

  
  render() {
    return (
      <div >


     

        <div id="radios">
  <label for="input1"></label>
  <input  id="input1" name="radio" type="radio"  value="0" onChange={this.changeTheme}  />
  <label for="input2"></label>
  <input  id="input2" name="radio" type="radio" value="1" onChange={this.changeTheme} />
  <label for="input3"></label>
  <input  id="input3" name="radio" type="radio" value="2" onChange={this.changeTheme}/>

  <span id="slider"></span>

  
</div>
      </div>




  
    );
  }
}

export default Color;