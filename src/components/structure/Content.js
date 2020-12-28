import React from "react"
import Services from "../sections/Services"
import Contacts from "../sections/Contacts"
import Testimonials from "../sections/Testimonial"
import AboutUs from "../sections/AboutUs"

function Content() {
    return(
        <main>
            <AboutUs />
            <Services />
            <Testimonials />
            <Contacts />
        </main>
    )
}

export default Content
