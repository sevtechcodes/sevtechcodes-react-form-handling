import React, { useState } from "react"
import "./App.css"

function App() {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    textAlign:"center"
  };

  const inputstyle = {
    height: "30px",
    width: "250px"
  };

  const [state, setState] = useState({
    fname: "",
    lname: "",
    phone: "",
    message: "",
    skill: "JAVASCRIPT",
    isChecked: false,
    gender: "",
    price: 0,
  })

  const handleChange = e => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setState({
      // add ...state to avoid overriding each other.
      ...state,
      [e.target.name]: value,
    })
  }

  return (
    <div style={{background:"whitesmoke", textAlign: "center"}}> 
      <div> 
        <h2 style={mystyle}>COURSE APPLICATION FORM</h2>
        <h5 style={{color: "blue"}}>(React Form Handling)</h5>

        <form>
          <label>
            First Name:{" "}
            <input
              type="text"
              name="fname"
              value={state.fname}
              onChange={handleChange}
              style={inputstyle}
            />
          </label>{" "}
          <br/>
          <label>
            Last Name:{" "}
            <textarea
              type="text"
              name="lname"
              value={state.lname}
              onChange={handleChange}
              style={inputstyle}
            />
          </label> 
          <br /><br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={state.gender === "male"}
            onChange={handleChange}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={state.gender === "female"}
            onChange={handleChange}
          />{" "}
          Female
        </label>
        <br/><br/>
          <label>
            Phone:{" "}
            <textarea
              type="text"
              name="phone"
              value={state.phone}
              onChange={handleChange}
              style={inputstyle}
            />
          </label>
          <br/><br/>
          <label>
            Which skill would you like to learn?
            <select
            name="skill"
            value={state.skill}
            onChange={handleChange}>

              <option>REACT</option>
              <option>BOOTSTRAP</option>
              <option>PYTHON</option>
              <option>JAVASCRIPT</option>
            </select>
          </label>
          
          <br /><br />
          <label>
            Would you like us to contact you on phone?
            <input
              type="checkbox"
              name="isChecked"
              checked={state.isChecked}
              onChange={handleChange}
            />{" "}
          </label>

        <br/><br/>

        <label>
          Your budget between 0-100
          <input
          type="range"
          name="price"
          min="0"
          max="100"
          value={state.price}
          onChange={handleChange}
          >
          </input>
        </label>
        <br/><br/>
        <label>
            Message:{" "}
            <input
              type="text"
              name="message"
              value={state.message}
              onChange={handleChange}
              style={{height: "100px", width: "319px"}}
            />
          </label><br/><br/>
        </form>
      </div>
   
      <div style={{backgroundColor:"grey"}}> 
        <h5>Full Name: {state.fname} {state.lname}</h5>
        <h5>Gender Selected : {state.gender}</h5>
        <h5>Phone number:{state.phone}</h5>
        <p>I would like to learn {state.skill}</p>
        <p>Message: {state.message}</p>
        <h5>Contact me on phone? : {state.isChecked ? "yes" :"No"} </h5>
        <h5>Budget: ${state.price}</h5>
        <input type='submit'  style={{backgroundColor:"yellowgreen"}}/>
      </div>

    </div>
    
  )
}

export default App