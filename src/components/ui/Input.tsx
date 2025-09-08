interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

function Input({className,...rest}:InputProps) {
  return (
    <input className={`rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${className}`} {...rest}/>
  )
}

export default Input
