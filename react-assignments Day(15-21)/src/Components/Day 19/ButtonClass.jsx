import React from "react";

class ButtonClass extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  //   handleCount = () => {
  //     this.setState((previousState) => {
  //       //   console.log(previousState);
  //       return { count: previousState.count + 1 };
  //     });
  //   };

  render() {
    return (
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
        // {this.handleCount}
        //() => {
        //   this.setState((previousCount) => {
        //     return { count: previousCount + 1 };
        //   });}}
      >
        {this.state.count}
      </button>
    );
  }
}

export default ButtonClass;
