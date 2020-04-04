import React from 'react'
import axios from 'axios'
import './App.css'

class App extends React.Component{

  state = {
    advice :''
  }

  componentDidMount(){
    this.getAdvice();

  }
  getAdvice = async () => {
    const response = await  axios.get('https://api.adviceslip.com/advice')
    const {advice} = response.data.slip;
    this.setState({advice});
    
  }
render(){
  const { advice } = this.state;
  var today = new Date();
  var date = today.getFullYear();
  return(
    <div className="app"> 
        <div className="wrapper">
            <h1>
              {advice}
            </h1>
            <button className="btnAdvice" onClick={this.getAdvice}>
              Get more Quotes 
            </button>
  <small><i class="fa fa-copyright" aria-hidden="true"></i> Scorpion Garage <i class="fa fa-code" aria-hidden="true"></i>  &nbsp;{date}</small>
        </div>
    </div>
  )
}

}

export default App