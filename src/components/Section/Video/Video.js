import React from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import PopVideo from './PopVideo'


const Video = () => {
  return (
    <>
      <section id='' className='video'>
              <Link to="#" className='playbutton'>
                {/* <BsFillPlayCircleFill className=''/> */}
                
              <PopVideo/>
              </Link>
              
      </section>
    </>
  )
}

export default Video