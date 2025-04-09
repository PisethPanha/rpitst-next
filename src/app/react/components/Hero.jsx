import React from 'react'
import banner from "../assets/378095555_a8514029-ca02-4f75-88ca-5affd797536f.jpg"
function Hero() {
  return (
    <div style={{ background: `url(https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/378095555_a8514029-ca02-4f75-88ca-5affd797536f.jpg)`, height: "90vh", backgroundSize: "cover" }} className='flex max-md:p-8 justify-center items-center'>

      <div className='backdrop-blur-[20px]  rounded-2xl border-4 border-blue-200 hover:scale-102 duration-200 p-2 text-center text-[30px]'>
        <h1 className='font-khmer text-white' style={{ textShadow: "0px 0px 20px black" }}>រៀនច្រើន​ អានច្រើន ចេះច្រើន</h1>
        <a href="#all_book">     <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 duration-150 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">GET START</button> </a>
      </div>
    </div>
  )
}

export default Hero