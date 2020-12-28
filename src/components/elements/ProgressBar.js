import React from "react"

function ProgressBar(props) {
    return(
        <div>
            <span className="title is-5">{props.text}</span>
            <progress className="progress is-success" value="100" max="100"></progress>
        </div>
    )
}

export default ProgressBar