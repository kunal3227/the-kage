import React from 'react'
export default function Navbar(props) {
  return (
    <>
    <div className='shadow-md py-4 bg-gradient-to-l from-blue-300 to-pink-300  duration-200'>
     <div className='container '>
      <div className='flex justify-between items-center '>
        <div className='flex items-center gap-2 text-4xl sm:text-6xl font-bold '>
        <img src={props.logoSrc} alt={props.title} className='w-1/5 sm:w-1/3' />
        <h1 className='text-[#FBF4DB] shadow-2xl p-1 -rotate-6 py-1 bg-primary-1 outline outline-primary bg-  '>{props.title}</h1>
        </div>
        <div >
          
          <ul className='sm:flex gap-3 hidden'>
            <li className=' inline-block py-4 px-4 hover:text-primary'>{props.myList[0]}</li>
            <li className=' inline-block py-4 px-4 hover:text-primary' >{props.myList[1]}</li>
            <li className=' inline-block py-4 px-4 hover:text-primary'>{props.myList[2]}</li>
          </ul>
          <button className=' bg-gradient-to-r from-primary-2 to-secondary text-white px-4 py-1 rounded-md sm:hidden'>{props.navBtn}</button>
          <button className='invisible'>three line here</button>
      </div>
     </div>
     </div>
    </div>

    

    </>
  )
}
