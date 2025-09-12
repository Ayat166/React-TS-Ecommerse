interface ImageComponentProps {
    src: string;
    alt: string;
    className?: string;
}

function ImageComponent({src,alt,className}:ImageComponentProps) {
  return (
    <div className="relative overflow-hidden bg-gray-100">
        <img 
            src={src} 
            alt={alt} 
            className={className}
        />
    </div>
  )
}

export default ImageComponent
