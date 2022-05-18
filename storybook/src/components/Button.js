import PropTypes from "prop-types"
function Button ({label,backgroundColor = "red",size = "md", onClick, roundness="med"}){
    let scale = 1
    if (size === "sm") scale = 0.75
    if (size ==="lg") scale = 1.5
    
    let br = "0px"
    switch (roundness)
    {
        case 'slt': br = "4px"
            break;
        case 'med': br = "8px"
            break;
        case 'vry': br = "12px"
            break;

    }
    const style = {
        backgroundColor,
        padding:`${scale*0.5}rem ${scale*1}rem`,
        border: "none",
        borderRadius:`${br}`,
    }
    return(
        <button onClick = {onClick} style = {style}>
            {label}
        </button>
    )
}

Button.propTypes = {
    label:PropTypes.string,
    backgroundColor:PropTypes.string,
    size: PropTypes.oneOf(["sm","md","lg"]),
    roundness: PropTypes.oneOf(["slt","med","vry"]),
    onClick: PropTypes.func,
}

export default Button
