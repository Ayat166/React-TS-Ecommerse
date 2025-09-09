interface IColorComponentProps {
    color: string;  
}
function ColorComponent({color}: IColorComponentProps) {
  return (
    <span className={`w-5 h-5 rounded-full inline-block cursor-pointer`} style={{backgroundColor:color}} />
  )
}

export default ColorComponent
