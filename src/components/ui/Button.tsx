interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: React.ReactNode;
    width?: "w-full" | "w-fit";
}

function Button({ className, children ,width="w-full",...rest }: ButtonProps) {
  return (
        <button className={`${className} ${width} h-10 rounded-lg text-white cursor-pointer`} {...rest}>{children}</button>
  )
}

export default Button
