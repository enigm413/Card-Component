//Importing necessary Dependencies modules & styling
import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

//Defining Main App COmponent
function App() {
  return (
    <div className="card">
      {/*Rendering Avatar Component */}
      <Avatar />

      <div className="data">
        {/*Rendering Intro & Skill List COmponent */}
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

//Defining Avatar Component
function Avatar() {
  return (
    <img className="avatar" src="\Images\Naim Ahamed.jpg" alt="Naim Ahamed" />
  );
}

//Defining Intro Component
function Intro() {
  return (
    <div>
      <h1>Naim Ahamed</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

//Defining Skill List Component
function SkillList() {
  return (
    <ul className="skill-list">
      {/*Rendering Skill With Appropiate Properties*/}
      <Skill SkillName="React" emoji="💪" color="blue" />
      <Skill SkillName="HTML+CSS" emoji="💪" color="orange" />
      <Skill SkillName="JavaScript" emoji="💪" color="yellow" />
      <Skill SkillName="Svelte" emoji="👶" color="red" />
    </ul>
  );
}

//Defining Skill Component
function Skill(props) {
  return (
    <li className="skill" style={{ backgroundColor: props.color }}>
      {props.SkillName} {props.emoji}
    </li>
  );
}

//Defining Root Contain that contain all components of webapage
const root = ReactDOM.createRoot(document.querySelector("#root"));

//Rendering App Component
root.render(<App />);
