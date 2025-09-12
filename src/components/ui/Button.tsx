interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: React.ReactNode;
    width?: "w-full" | "w-fit";
    variant?: 'primary' | 'secondary' | 'destructive' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

function Button({ 
    className, 
    children, 
    width = "w-full", 
    variant = 'primary',
    size = 'md',
    ...rest 
}: ButtonProps) {
    
    const baseClasses = "inline-flex items-center justify-center font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
    
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300",
        destructive: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
        ghost: "hover:bg-gray-100 hover:text-gray-900",
        outline: "border border-gray-300 bg-transparent hover:bg-gray-50"
    };
    
    const sizes = {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base"
    };
    
    const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${width} ${className || ''}`;
    
    return (
        <button className={buttonClasses} {...rest}>
            {children}
        </button>
    )
}

export default Button
