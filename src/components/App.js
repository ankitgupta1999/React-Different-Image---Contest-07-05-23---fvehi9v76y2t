import React from 'react'
import '../styles/App.css';
import Programming from '../assests/programming.gif'
const GIF = (props) => {
  return (
    <img className='import-image' height={200} src={props} alt='programming-gif'/>
  )
}

const App = () => {

  return (
    <div id="main">
      <h1>Add images in 2-different ways.</h1>
      <GIF src={Programming}/>
      <img className='url-image' src="https://picsum.photos/id/400/200" alt='A  random image' />
    </div>
  )
}


export default App;
