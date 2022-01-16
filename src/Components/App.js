import React from "react"
import FactCard from "./FactCard"

class App extends React.Component{
  constructor(){
    super()
    this.state ={fact: "click button to generate new fact"}
  }
  componentDidMount(){
    this.fact()
  }
  fact = () => {
    console.log("getting new fact")
    const theUrl = "https://uselessfacts.jsph.pl/random.json?language=en"
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open( "GET", theUrl, false ) // false for synchronous request
    xmlHttp.send( null )
    const newFact = JSON.parse(xmlHttp.responseText)
    console.log(newFact.text)
    this.setState({fact: newFact.text})
  }
  render(){
    return (
      <FactCard fact={this.state.fact} getNewFact={this.fact} />
    )
  }
}

export default App;
