import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {
  return <h1>{props.course}</h1>
};
const Content = (props) => {
  return <div>{props.parts.map(item => <div><h3>{item.name}</h3><div>{item.exercises}</div></div>)} </div>
};
const Total = (props) => {
  return <div>Number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</div>
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
