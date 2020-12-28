import React from "react"
import Info from "../../info.json"

function Contacts() {
    return(
        <section className="section" id="certifications">
            <div className="container">
                <h1 className="title">Contacts</h1>
                <div className="columns">
                    <div className="column is-6">
                        <div className="has-text-centered">
                            <span className="icon has-text-link">
                                <i className="fas fa-3x fa-address-card"></i>
                            </span>
                            <h2 className="title is-5">Get in Touch:</h2>
                        </div>
                        <div className="has-text-centered">
                        <br />
                            <h3 className="has-text-info">Our Address</h3>
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <h4> B2 Business System Pvt. Ltd. <br />Behind Laxmi Bank Gongabu, Kathamndu</h4>
                            <br/>
                            <h3 className="has-text-info">Our Phones</h3>
                            <i class="fa fa-headset" aria-hidden="true"></i>
                            <h4> Office: +977 015907477 | Mobile: +977-9849640234, 984324414</h4>
                            <br/>
                            <h3 className="has-text-info">Our Emails</h3>
                            <i class="fa fa-at" aria-hidden="true"></i>
                            <h4> b2business2020@gmail.com</h4>
                            <br/>
                            <h3 className="has-text-info">Find Us On Social Media</h3>
                            <i class="fa fa-share-square" aria-hidden="true"></i>
                        </div>
                        <div className="main-foot" style={{paddingBottom:'20px'}}>
                <div className="columns is-mobile">
                    <div className="column is-4"></div>
                    {
                        Info.basics.profiles.map((value, index) => {
                            return (
                                <div key={index} className="column is-2 has-text-centered">
                                    <a href={value.url} target="blank" className="is-hovered" title={value.network}>
                                        <span >
                                            <i className={value.x_icon}></i>
                                        </span>
                                    </a>
                                </div>
                            );
                        })
                    }
                    <div className="column is-4"></div>
                </div>
            </div>
                    </div>
                    <div className="column is-6">
                        <div id="map" class="iframe-rwd">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.4172757707042!2d85.31292881534904!3d27.735272830870425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb192739d825a1%3A0x62b3471991c8cd6f!2sGautam%20%26%20Son%20Traders!5e0!3m2!1sen!2sde!4v1609107822404!5m2!1sen!2sde" width="700" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Contacts
