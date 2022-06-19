import React from "react";
import "./App.css";

function App() {
  const SIZES = ["M", "L", "XS", "10d"];
  const STATUSES = ["in Progress", "planned", "blocked", "none"];
  const PRIORITY = ["high", "mid", "low", "none"];

  return <div></div>;
}

const Task = ({
  size,
  status,
  priority,
  title,
}: {
  size: string;
  status: string;
  priority: string;
  title: string;
}) => {
  return (
    <div className="task">
      <div className="task-owner"></div>
      <div className="task-title">{title}</div>
      <div className="task-title">{title}</div>
    </div>
  );
};

export default App;
