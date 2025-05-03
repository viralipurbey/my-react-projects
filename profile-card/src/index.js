import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="photo.jpeg" alt="Virali Purbey" />;
}

function Intro() {
  return (
    <div>
      <h1>Virali Purbey</h1>
      <p>
        Software engineer working at Microsoft. Love to travel and explore new
        places. I like playing badminton and cooking delicious food.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="Java" emoji="😃" color="blue" />
      <Skill name="Python" emoji="😃" color="orangered" />
      <Skill name="C++" emoji="😃" color="yellow" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
