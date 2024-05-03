
import './BackgroundSlider.css'
import imageSlide from './data'
import { useState, useEffect } from 'react'

const BackgroundSlider = () => {
    const[currentState,setCurrentState]= useState(0)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(currentState===2){
                setCurrentState(0)
            }else{
                setCurrentState(currentState+1)
            }
        },5000)
        return()=> clearTimeout(timer)
    })
    const bgImageStyle={
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition:'center',
        backgroundSize: 'cover',
        height: '100%'
    }
    const goToNext = (currentState)=>{
        setCurrentState(currentState)
    }
  return (
    <div className='countiner-style'>
        <div style={bgImageStyle}></div>
        <div className='description'>
            <div>
                <h1>{imageSlide[currentState].title}</h1>
                <h2>{imageSlide[currentState].body}</h2>
                {/* <p>{imageSlide[currentState].body1}</p> */}
            </div>
            <div className='carousel-boullt'>
                {
                    imageSlide.map((imageSlide,currentState)=>(
                        <span key={currentState} onClick={()=> goToNext(currentState)}></span>
                    ))
                }
            </div>
        </div>
    </div>

  )
}
export default BackgroundSlider