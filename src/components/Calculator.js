/* eslint-disable */
import React, { Component } from 'react';

import calculate from './logic/calculate';
import operate from './logic/operate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
      operation: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ next: e.target.value });
  }

  handleClick(e) {
    if (this.isNumber(e.target.outerText)) {
      console.log(e.target.outerText);
      this.setState({ next: e.target.outerText });
      const obj = this.state;
      const res = calculate(obj, e.target.outerText);
      this.setState({ next: res.next });
    }

    if (
      e.target.outerText === '+' ||
      e.target.outerText === '-' ||
      e.target.outerText === 'x' ||
      e.target.outerText === '÷'
    ) {
      this.setState({ operation: e.target.outerText });
      const obj = this.state;
      const res = calculate(obj, e.target.outerText);
      this.setState({ next: res.next });
      this.setState({ total: res.total });
    }

    if (e.target.outerText === '=') {
      const obj = this.state;
      const res = calculate(obj, e.target.outerText);
      this.setState({ ...res });
      this.setState({ next: res.total });
    }
    if (e.target.outerText === '.') {
      const obj = this.state;
      const res = calculate(obj, e.target.outerText);
      if (Object.entries(res).length !== 0) {
        this.setState({ ...res });
        this.setState({ next: res.next });
      }
    }
    if (e.target.outerText === 'AC') {
      const reset = { total: 0, next: 0, operation: null };
      this.setState({ ...reset });
    }
    if (e.target.outerText === '+/-') {
      const obj = this.state;
      const res = calculate(obj, e.target.outerText);
      this.setState({ ...res });
      this.setState({ next: res.next });
    }
    if (e.target.outerText === '%') {
      const obj = this.state;
      this.setState({ next: parseFloat(obj.next / 100).toString() });
    }
  }

  isNumber = (item) => !!item.match(/[0-9]+/);

  render() {
    return (
      <div className="Calculator">
        <input
          readOnly
          value={this.state.next}
          onChange={this.handleChange}
          style={{ direction: 'rtl' }}
        />
        <button onClick={this.handleClick}>AC</button>
        <button onClick={this.handleClick}>+/−</button>
        <button onClick={this.handleClick}>%</button>
        <button onClick={this.handleClick} className="sacndry-color">
          ÷
        </button>
        <button onClick={this.handleClick}>7</button>
        <button onClick={this.handleClick}>8</button>
        <button onClick={this.handleClick}>9</button>
        <button onClick={this.handleClick} className="sacndry-color">
          x
        </button>
        <button onClick={this.handleClick}>4</button>
        <button onClick={this.handleClick}>5</button>
        <button onClick={this.handleClick}>6</button>
        <button onClick={this.handleClick} className="sacndry-color">
          -
        </button>
        <button onClick={this.handleClick}>1</button>
        <button onClick={this.handleClick}>2</button>
        <button onClick={this.handleClick}>3</button>
        <button onClick={this.handleClick} className="sacndry-color">
          +
        </button>
        <button onClick={this.handleClick} className="zero">
          0
        </button>
        <button onClick={this.handleClick}>.</button>
        <button onClick={this.handleClick} className="sacndry-color">
          =
        </button>
      </div>
    );
  }
}
