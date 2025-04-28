import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [isResult, setIsResult] = useState(false);
  const getInput = (newValue) => {
    setIsResult(false);
    setValue((prevValue) => {
      if (prevValue === '0' || isResult) {
        setIsResult(false);
        return newValue;
      } else {
        return prevValue + newValue;
      }
    });
  };
  const calculateResult = () => {
    if (value === '0') {
      setValue('input expected');
      setIsResult(true);
      return;
    }
    try {
      setValue(eval(value).toString());
      setIsResult(true);
    } catch (error) {
      setValue('input expected');
      alert(error);
      setIsResult(true);
    }
  };
  const clearData = () => {
    setValue('');
    setIsResult(false);
  };

  const handleKey = (event) => {
    const key = event.key;
    if (!isNaN(key)) {
      getInput(key);
    } else if (['+', '-', '/', '*', '.'].includes(key)) {
      getInput(key);
    } else if (key === 'Backspace') {
      setValue((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
    } else if (key === 'Enter') {
      calculateResult();
    } else if (key === 'Delete') {
      clearData();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  });
  return (
    <>
      <div className="container">
        <input type="text" value={value} readOnly placeholder="0" />
        <div className="flex-box">
          <button type="submit" onClick={() => getInput('7')}>
            7
          </button>
          <button type="submit" onClick={() => getInput('8')}>
            8
          </button>
          <button type="submit" onClick={() => getInput('9')}>
            9
          </button>
          <button type="submit" onClick={() => getInput('/')}>
            /
          </button>
          <button type="submit" onClick={() => getInput('4')}>
            4
          </button>
          <button type="submit" onClick={() => getInput('5')}>
            5
          </button>
          <button type="submit" onClick={() => getInput('6')}>
            6
          </button>
          <button type="submit" onClick={() => getInput('*')}>
            x
          </button>
          <button type="submit" onClick={() => getInput('1')}>
            1
          </button>
          <button type="submit" onClick={() => getInput('2')}>
            2
          </button>
          <button type="submit" onClick={() => getInput('3')}>
            3
          </button>
          <button type="submit" onClick={() => getInput('-')}>
            -
          </button>
          <button type="submit" onClick={() => getInput('0')}>
            0
          </button>
          <button type="submit" onClick={() => getInput('.')}>
            .
          </button>
          <button type="submit" onClick={calculateResult}>
            =
          </button>
          <button type="submit" onClick={() => getInput('+')}>
            +
          </button>
          <button type="submit" onClick={clearData} style={{ width: '100%' }}>
            Del
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
