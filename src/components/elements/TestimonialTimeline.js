import React from "react"
import TestimonialItem from "./TestimonialItem"
import Info from "../../info.json"

function TestimonialTimelineItem() {
    return(
        <div className="timeline is-centered">
            <div className="testimonial-item"></div>
            {
                Info.testimonials.map((item) => {return new Date(item.startDate).getFullYear()}).map((year, index) => {
                    let content = []
                    content.push(Info.testimonials.filter(education => new Date(education.startDate).getFullYear() === year).map((item, index) => {
                            return <TestimonialItem
                                        key = {index}
                                        startDate = {new Date(item.startDate).toLocaleString('en-UK', {month:'long', year: 'numeric'})}
                                        endDate = {new Date(item.endDate).toLocaleString('en-UK', {month:'long', year: 'numeric'})}
                                        institution = {item.institution}
                                        name = {item.name}
                                        image =  {item.image}       
                                        details = {item.details}
                                    />
                        }))
                    return content
                })
            }
        </div>
    )
}

export default TestimonialTimelineItem
