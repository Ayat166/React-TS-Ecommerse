interface IColorComponentProps extends React.HTMLAttributes<HTMLSpanElement>{
    color: string;  
}
function ColorComponent({color, className, ...rest}: IColorComponentProps) {
  return (
    <span 
        className={`w-5 h-5 rounded-full inline-block cursor-pointer ${className || ''}`} 
        style={{backgroundColor:color}} 
        {...rest}
    />
  )
}

export default ColorComponent
