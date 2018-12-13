import React from "react";
import ReactDOM from "react-dom";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    };
    this.plusOne = this.plusOne.bind(this);
  }

  plusOne() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return <button onClick={this.plusOne}>{this.state.count}</button>;
  }
}

function App() {
  return (
    <div className="App">
      <Button count={1} />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
