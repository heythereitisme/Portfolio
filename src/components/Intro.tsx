import React from 'react'
import ReactLogo from '/React.svg'
import ExpressLogo from '/expressjs.svg'
import JavascriptLogo from '/Javascript.svg'
import MongoDBLogo from '/MongoDB.svg'
import NodeJSLogo from '/NodeJS.svg'

const Intro = () => {
  return (
    <div>
    <div className='flex flex-col'>
        <span className='text-4xl font-Heading'>About Me </span>
    </div>
    <div className='flex bg-purple-100 w-2/3 rounded-3xl mx-auto my-5'>
        <div className='p-10 flex flex-col'>
            <span className='sm:text-lg font-Para sm:leading-relaxed xsm:text-md'> 
            I am thrilled and excited to pivot my career in Full Stack Development. I am an avid researcher who enjoys deep diving into analyzing problems, gathering data, and studying the comparable differences from my findings. Although, I am a quiet individual, my brain processes in high speeds and love involving myself in a collaborative environment. 
            </span>
            <span className='sm:text-lg font-Para sm:leading-relaxed mt-10 xsm:text-md'> 
            My interests in technology gears towards research and structural data. My greatest strengths is determining the root cause of the challenges that come my way. Recently I’ve completed an intensive full stack development program with InceptionU and I am looking forward to continuing as an active member in Calgarys tech community!
            </span>
        </div>
    </div>
        <span className='text-3xl font-Heading'>Technologies:</span>
    <div className='gap-20 mt-10 xl:flex lg:grid lg:grid-cols-2 xsm:grid-cols-1'>
      <img src={ReactLogo} alt="React logo" height={100} width={100} className='lg:ml-auto xsm:mx-auto'/>
      <img src={ExpressLogo} alt="React logo" height={100} width={200} className='xsm:mx-auto'/>
      <img src={JavascriptLogo} alt="React logo" height={100} width={100} className='xsm:mx-auto'/>
      <img src={MongoDBLogo} alt="React logo" height={100} width={200} className='xsm:mx-auto'/>
      <img src={NodeJSLogo} alt="React logo" height={100} width={150} className='xsm:mx-auto'/>
    </div>
    </div>
  )
}

export default Intro