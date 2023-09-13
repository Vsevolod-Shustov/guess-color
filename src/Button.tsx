interface ButtonProps {
    color: string,
    click: Function
}

function Button({color, click}: ButtonProps){
    return(
        <button onClick={() => click(color)}>{color}</button>
    )
}

export default Button