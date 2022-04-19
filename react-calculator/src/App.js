import "./App.css";
import React, { Component } from "react";
import Digit from "./component/Digit";
import Operation from "./component/Operation";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: ["", ""],
      operator: "",
      calculated: false,
    };
  }

  offset() {
    return this.state.operator === "" ? 0 : 1;
  }

  onClickDigit = (e) => {
    if (this.state.numbers[this.offset()].length >= 3) {
      alert("숫자는 3자리수까지 입력가능합니다");
      return;
    }

    const digit = Number(e.target.innerText);
    const newNumbers = [...this.state.numbers];

    newNumbers[this.offset()] += digit;
    this.setState({
      numbers: newNumbers,
      calculated: false,
    });
  };

  onClickOperation = () => {};

  totalRender() {
    return this.state.calculated
      ? this.resultRender()
      : this.numberOperationRender();
  }

  numberOperationRender() {
    if (!this.state.numbers[0]) {
      return "0";
    }

    return `${this.state.numbers[0]}${this.state.operator}${this.state.numbers[1]}`;
  }

  resultRender() {
    if (this.state.operator === "+") {
      return this.state.numbers[0] + this.state.numbers[1];
    }
    if (this.state.operator === "*") {
      return this.state.numbers[0] * this.state.numbers[1];
    }
    if (this.state.operator === "-") {
      return this.state.numbers[0] - this.state.numbers[1];
    }
    if (this.state.operator === "/") {
      return Math.floor(this.state.numbers[0] / this.state.numbers[1]);
    }
  }

  render() {
    return (
      <div id="app">
        <div className="calculator">
          <h1 id="total">{this.totalRender()}</h1>
          <Digit onClickDigit={this.onClickDigit}></Digit>
          <Operation onClickOperation={this.onClickOperation}></Operation>
        </div>
      </div>
    );
  }
}

export default Calculator;
