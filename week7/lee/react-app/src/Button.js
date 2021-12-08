import PropTypes from "prop-types";

function Btn(props){
    return (
        <button style = {{
            backgroundColor : "tomato",
            color : "white",
        }}>{props.text}</button>
    );
}

Btn.PropTypes = {
    text : PropTypes.string.isRequired,
}

export default Btn;