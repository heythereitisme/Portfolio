import React from 'react'

const Experience = () => {
  return (
    <div className='mb-20 mt-10 flex flex-col mx-5'>
      <span className='text-6xl font-Heading border-b-2 border-purple-900 w-2/3 mx-auto'>Experience</span>
      <div className='mt-20 flex flex-col gap-10 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded-3xl'>
        <img src="/InceptionU.png" alt="InceptionU" height={300} width={500} className='mx-auto'/>
      <span className='sm:text-lg font-Para leading-relaxed text-md px-24'>
        At InceptionU I took a full stack development training course where I learned a great deal about full stack development. I learned Javascript, CSS, HTML, React and 
        more during the process. The course featured project-based learning in which we had three major projects to complete and present to our peers. Project two and three
        were also done in teams, so I also learned much about working together collaboratively and working in an agile scrum environment.
      </span>
      <a href="https://www.inceptionu.com/" className="w-1/3 h-12 text-lg font-Para self-center rounded-full"> 
      <button className="w-full relative transition-all h-12 before:w-0 before:bg-purple-900 before:h-2 before:absolute before:bottom-0 before:right-1/2 hover:before:w-full hover:before:right-0 before:transition-all before:duration-500 text-purple-900 mx-auto font-Para drop-shadow hover:text-indigo-800">
          <span className="text-lg">Website</span>
        </button>
            </a>
            <div>
      </div>
      </div>
      <div className='mt-10'>
        <span className="text-4xl font-Heading"> More to come!</span>
      </div>
    </div>
  )
}

export default Experience