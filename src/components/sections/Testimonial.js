import React from "react"

import Timeline from "../elements/TestimonialTimeline"

function Testimonial() {
    return(
        <section className="section" id="testimonials">
            <div className="container">
                <h1 className="title">What Clients Say About Us</h1>
                <div className="columns">
                        <div className="has-text-centered">
                        <h2 className="subtitle has-text-info">These testimonials written by our regular 
                            clients, testimonials are the best way to find out more about B2 Business level of service and expertise.</h2>
                    </div>
                    
                </div>
                <Timeline />
            </div>
        </section>
    )
}

export default Testimonial

