import { useState } from 'react'
import City from './assets/City.jpeg'
import MachuPicchu from '/MachuPicchu.jpeg'
import Profile from './components/Profile/Profile'
import Video from './components/Video/Video'
import Menu from './components/Menu/Menu'

function App() {
  const [count, setCount] = useState(0)
  const [video, chooseVideo] = useState("fast")
  const size = 100
  let src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4"
  const VIDEOS = {
    fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
    slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
    cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
    eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
  };

  return (
    <>
      <div style={{
        backgroundColor: '#FF0000', 
        padding: '2px', 
        textAlign: 'left', 
        fontFamily: 'Roboto',
        color: 'white'  
      }}>
      <h1> My First Vite + React Website</h1>
      </div> 

      <div>
      <h4 style={{
        backgroundColor: '#BEBEBE', 
        padding: '2px', 
        textAlign: 'left', 
        fontFamily: 'Roboto',
        color: 'black' 
      }}>Choose video speed</h4>
      <Menu chooseVideo={chooseVideo}/>
      </div>
      
      <Video src={VIDEOS[video]}/> 
      <Profile size={size}/>
    
      <div>
        <a href="public/" target="_blank">
          <img src={MachuPicchu} className="logo" 
          alt="Vite logo"
          width={150}
          height={150}
           />
        </a>

        <a href="src/assets/" target="_blank">
          <img src={City} className="logo react" 
          alt="React logo" 
          width={150}
          height={150}/>
        </a>
      </div>
      
      <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        Increase Count
      </button>
      <div>        
        Count is {count}
      </div>
      </div>

      <p 
      className="read-the-docs">
      </p>

    </>
  )
}

export default App
