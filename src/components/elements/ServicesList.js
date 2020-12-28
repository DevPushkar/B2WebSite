import React from "react"
import ProgressBar from "./ProgressBar"

function ServicesList(props) {
    const services = props.services
    return (
        <ul className="service-list">
            {serviceLists(services)}
        </ul>
    )
}

function serviceLists(services){
    let progressBars = []
    let counter = 0
    Object.entries(services).forEach(([key, value]) => {
        progressBars.push(<li key={counter}>
            <ProgressBar
                key={counter}
                text={key}
            />
        </li>)
        counter++
    })
    return progressBars
}

export default ServicesList