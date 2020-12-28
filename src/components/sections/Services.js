import React from "react"
import ServicesList from "../elements/ServicesList"
import Info from "../../info.json"

function Services() {
    return(
        <section className="section" id="services">
            <div className="container">
                <h1 className="title">Services</h1>
                <div className="columns">
                    <div className="column is-6">
                        <div className="has-text-centered">
                            <span className="icon has-text-link">
                                <i className="fas fa-3x fa-cogs"></i>
                            </span>
                            <h2 className="title is-5">हाम्रा सेवाहरू:</h2>
                        </div>
                        <ServicesList services = {
                            Info.services.filter(skill => skill.keywords.includes('Nepali')).reduce((obj,item) => ((obj[item.name] = item.level, obj)),{})
                        } />
                    </div>
                    <div className="column is-6">
                        <div className="has-text-centered">
                            <span className="icon has-text-link">
                                <i className="fas fa-3x fa-laptop-code"></i>
                            </span>
                            <h2 className="title is-5">Our Services</h2>
                        </div>
                        <ServicesList services = {
                            Info.services.filter(skill => skill.keywords.includes('English')).reduce((obj,item) => ((obj[item.name] = item.level, obj)),{})
                        } />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
