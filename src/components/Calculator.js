import { useState } from 'react';
import calculate from './logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleChange = () => {};

  const handleClick = (e) => {
    setState({ ...state, ...calculate(state, e.target.outerText) });
  };
  const { next, total } = state;
  return (
    <div>
      <div className="calc-header">
        <h3>lets do some math</h3>
      </div>
      <div className="Calculator">
        <input
          type="text"
          value={next || total || '0'}
          className="answer"
          disabled="disabled"
          onChange={handleChange}
          style={{ direction: 'rtl' }}
        />
        <button type="button" onClick={handleClick}>
          AC
        </button>
        <button type="button" onClick={handleClick}>
          +/−
        </button>
        <button type="button" onClick={handleClick}>
          %
        </button>
        <button type="button" onClick={handleClick} className="sacndry-color">
          ÷
        </button>
        <button type="button" onClick={handleClick}>
          8
        </button>
        <button type="button" onClick={handleClick}>
          7
        </button>
        <button type="button" onClick={handleClick}>
          9
        </button>
        <button type="button" onClick={handleClick} className="sacndry-color">
          x
        </button>
        <button type="button" onClick={handleClick}>
          4
        </button>
        <button type="button" onClick={handleClick}>
          5
        </button>
        <button type="button" onClick={handleClick}>
          6
        </button>
        <button type="button" onClick={handleClick} className="sacndry-color">
          -
        </button>
        <button type="button" onClick={handleClick}>
          1
        </button>
        <button type="button" onClick={handleClick}>
          2
        </button>
        <button type="button" onClick={handleClick}>
          3
        </button>
        <button type="button" onClick={handleClick} className="sacndry-color">
          +
        </button>
        <button type="button" onClick={handleClick} className="zero">
          0
        </button>
        <button type="button" onClick={handleClick}>
          .
        </button>
        <button type="button" onClick={handleClick} className="sacndry-color">
          =
        </button>
      </div>
    </div>
  );
}
