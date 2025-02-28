import React, { useEffect } from 'react'
import {useState} from 'react'
import Background from './Components/Background/Background'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'

const App = () => {
    let heroData= [
        {text1:"Dive into",text2:"what you love"},
        {text1:"Indulge",text2:"your passion"},
        {text1:"Give in to",text2:"what you love"},
    ]
    const [heroCount,setHeroCount] = useState(0);
    const [playStatus,setPlayStatus] = useState(false);

    useEffect(()=>{
      setInterval(()=>{
        setHeroCount((count)=> {return count===2?0:count+1})
      },3000);
    },[]);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
        setPlayStatus={setPlayStatus}
        playStatus={playStatus}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        heroData={heroData[heroCount]}
      />
    </div>
  )
}

export default App
