import { ButtonHTMLAttributes } from "react";

import '../styles/button.scss';
// Utiliza dessa forma para nào precisar criar propriedades uma por uma
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}

export function Button({isOutlined = false, ...props}: ButtonProps) {
  return <button className={`button ${isOutlined? 'outlined' : ''}`} {...props} />;
}
