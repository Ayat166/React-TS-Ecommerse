interface IColorComponentProps extends React.HTMLAttributes<HTMLSpanElement>{
    color: string;  
}
function ColorComponent({color,...rest}: IColorComponentProps) {
  return (
    <span className={`w-5 h-5 rounded-full inline-block cursor-pointer`} style={{backgroundColor:color}} {...rest}/>
  )
}

export default ColorComponent
