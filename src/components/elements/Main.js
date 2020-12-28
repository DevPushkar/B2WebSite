import React from "react"
import NavBar from "./NavBar"
import Info from "../../info.json"

function Main() {
    return (
        <section className="hero is-dark is-fullheight has-bg-image">
            <div className="main-head">
                <NavBar />
            </div>
            <div className="main-body">
                <div className="container">
                    <p className="subtitle is-5 has-text-weight-light is-italic">Connect Today, Bright Tomorrow</p>

                    <h1 className="title">B2 Business provides quality  financial solutions to businesses located all over the Nepal.</h1>
                    <h2 className="subtitle has-text-info">{Info.basics.location.region}, {Info.basics.location.country}</h2>
                </div>
            </div>
            <div className="main-foot" style={{paddingBottom:'20px'}}>
                <div className="columns is-mobile">
                    <div className="column is-4"></div>
                    {
                        Info.basics.profiles.map((value, index) => {
                            return (
                                <div key={index} className="column is-2 has-text-centered">
                                    <a href={value.url} target="blank" className="is-hovered" title={value.network}>
                                        <span className="icon is-medium is-">
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
        </section>
    )
}

export default Main