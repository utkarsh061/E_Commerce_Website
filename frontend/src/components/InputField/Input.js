"use client"

function Input(props){
    const { type,value,className,handleFunction,isDisabled,placeholder } = props
    return (
        <input
            type = {type}
            value={value}
            className={className}
            onClick={handleFunction}
            disabled={isDisabled}
            placeholder={placeholder}
        />
    )
}

export default Input;