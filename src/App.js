import React, { Component } from 'react';

import './App.css';

const json  = [
  {
    name:"title",
    text:"sssss"
  },
  {
    name:"title",
    text:"sssss"
  },
  {
    name:"title",
    text:"sssss"
  },
  {
    name:"title",
    text:"sssss"
  },
  {
    name:"title",
    text:"sssss"
  },
  {
    name:"title",
    text:"sssss"
  }

]

const Item = (props) =>{
  return (
    <div className="grid-item" >
      <div className="card" >
      <div className="card-img" ><img /></div>
        
        <h2>let pictures speak</h2>
        <div className="best-seller">Best seller</div>
        <p>Let your pictures speak for themselves.</p>
        <div>from <span>£10.00</span></div>
        <button >Shop Now </button>
      </div>
    </div>
  )
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="products">
         { 
           json.map((item,i)=>{
              return (<Item {...item}/>)
            })
          }
        </div>
     
      </div>
    );
  }
}

export default App;
