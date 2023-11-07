import React from "react";
import Block from "./Block";

class Suqare extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  clickChangeColor = (cellState) => {
    this.setState((prevState) => ({
      counter: prevState.counter + (cellState ? 1 : -1),
    }));
  };

  render() {
    const grids = {
      display: "grid",
      gridTemplateColumns: "repeat(2, 100px)",
      gridGap: "2px",
    };
    const gridContainerStyle = {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    };
    return (
      <div style={gridContainerStyle}>
        <div>Count: {this.state.counter}</div>
        <div style={grids}>
          <Block click={this.clickChangeColor} />
          <Block click={this.clickChangeColor} />
          <Block click={this.clickChangeColor} />
          <Block click={this.clickChangeColor} />
        </div>
      </div>
    );
  }
}

export default Suqare;
