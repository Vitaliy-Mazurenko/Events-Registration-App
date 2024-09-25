import './input.css';
import React, { InputHTMLAttributes } from 'react';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
  
const Input: React.FC<InputProps> = (props) => {
		return <input className='myInput' {...props} />;
};
  
export default Input;