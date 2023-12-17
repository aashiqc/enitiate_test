'use client'

import { ReactNode } from 'react';

interface InputProps {

  id: string;
  type?: string;
  placeholder: string;
  icon?: ReactNode; 
  onChange? : (event: any) => void;
  value? : string;
}

const Input: React.FC<InputProps> = ({  id,type = "text",placeholder, icon, onChange, value }) => {
  return (
    <div className="relative gap-3">
      {icon && <div className="text-neutral-700 absolute top-3 left-2">{icon}</div>}
      <input
        id={id}
        required
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full text-sm p-2 pl-7 font-light bg-transparent rounded-md outline-none  transition border-2 border-col"
      />
    </div>
  );
};

export default Input;
