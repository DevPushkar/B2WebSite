import React, { Component } from 'react';
import Header from "./components/structure/Header"
import Content from "./components/structure/Content"
import Footer from "./components/structure/Footer"
import Info from "./info.json"

class App extends Component {

  componentDidMount(){
    document.title = [
      Info.basics.name,
      Info.basics.label,
      [Info.basics.location.region,Info.basics.location.country].join(", ")
    ].join(" | ")
  }

  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
