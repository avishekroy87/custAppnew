

const Button = ({children, size , className, ...rest} : {children?: React.ReactNode, size?: string, className?: string}) => {
    /**
     * Challenge: See if you can fix the problem with the
     * conflicting `className` props. Doesn't need to be
     * elegant, just see if you can get the button to be
     * both large AND with green text
     */
    
    let sizeClass
    if (size === "sm") sizeClass = "button-small " + className
    if (size === "lg") sizeClass = "button-large " + className
    
    return (
        <button className={`${sizeClass} ${className}`}>
            {children}
        </button>
    )
}

export default Button;