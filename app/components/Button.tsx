interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "submit" | "reset" | "button" | undefined;
    outline?: boolean;
  }
  
  const Button: React.FC<ButtonProps> = ({ label, onClick, type, outline }) => {
    return (
      <button
        className={`
        relative text-white disabled:opacity-70 disabled:cursor-not-allowed rounded-lg 
        hover:opacity-80 transition w-full  py-2 border-[1px]
        ${outline? 'bg-transparent' : 'bg-blue-700'}
        ${outline? 'border-white' : 'border-blue-700'}
    ]
        `}
        type={type}
        onClick={onClick}
      >
        {label}
      </button>
    );
  };
  
  export default Button;
  