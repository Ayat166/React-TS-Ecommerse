interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

function Input({className,...rest}:InputProps) {
  return (
    <input 
        className={`w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${className}`} 
        {...rest}
    />
  )
}

export default Input
