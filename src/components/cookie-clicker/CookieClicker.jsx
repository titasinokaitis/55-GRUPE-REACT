import { useState } from 'react';
import './CookieClicker.css';

export function CookieClicker() {
    const initialCountValue = 0;
    const [count, setCount] = useState(initialCountValue);

    function handleMinusOneClick() {
        setCount(n => n - 1);
    }

    function handlePlusOneClick() {
        setCount(n => n + 1);
    }

    function handleResetClick() {
        setCount(() => initialCountValue);
    }

    return (
        <div>
            <h1 className="display-1">Cookie clicker</h1>
            <div className='cookieClicker'>
                <button onClick={handleMinusOneClick} className='btn'>-</button>
                <p className='count'>🍪 {count}</p>
                <button onClick={handlePlusOneClick} className='btn'>+</button>
                <button onClick={handleResetClick} className='btn'>Reset</button>
            </div>
        </div>
    );
}