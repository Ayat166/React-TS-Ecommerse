interface ImageComponentProps {
    src: string;
    alt: string;
    className?: string;
}
function ImageComponent({src,alt,className}:ImageComponentProps) {
  return (
    <div>
        <img src={src} alt={alt} className={className}/>
    </div>
  )
}

export default ImageComponent
