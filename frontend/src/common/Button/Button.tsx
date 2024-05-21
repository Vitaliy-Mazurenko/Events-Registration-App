import './button.css';

interface ButtonProps {
	text: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	id?: string;
	className?: string;
  }
  
  const Button: React.FC<ButtonProps> = ({ text, onClick, id, className }) => {
	return (
	  <button id={id} onClick={onClick} className={className} >
		{text}
	  </button>
	);
  };
  
  export default Button;
