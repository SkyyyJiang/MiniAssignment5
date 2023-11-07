import React from "react";

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isBlack: false };
  }

  changeMessage = () => {
    const white = !this.state.isBlack;
    this.setState({ isBlack: white });
    this.props.click(white);
  };

  render() {
    const style = {
      height: "100px",
      width: "100px",
      border: "1px solid grey",
      backgroundColor: this.state.isBlack ? "black" : "white",
      cursor: "pointer",
    };

    return <div style={style} onClick={this.changeMessage}></div>;
  }
}

export default Block;
