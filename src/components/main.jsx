import { TypeAnimation } from "react-type-animation"
import {FaGithub,FaFacebook,FaInstagram,FaLinkedinIn} from 'react-icons/fa'
const main = () => {
  return (
    <div id="main">
   <img className='w-full h-screen object-cover object-left' src='/pc3.jpg' alt="" />
   <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
    <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
        <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Shema Paulin</h1>
        <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">I'm a
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Software Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Software Enthusiast',
        1000,
        
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block',paddingLeft:'5px' }}
      repeat={Infinity}
    />
        </h2>
        <div className="flex justify-between pt-6 max-w-[200px] w-full">
           <a href="https://www.facebook.com/shema.paurin/"> <FaFacebook className="cursor-pointer"size={20}/></a>
           <a href="https://www.instagram.com/shema.talk/"><FaInstagram className="cursor-pointer"size={20}/></a> 
           <a href="https://github.com/shemapaulin"><FaGithub className="cursor-pointer"size={20}/></a> 
          <a href="https://www.linkedin.com/in/paulin-shema/"><FaLinkedinIn className="cursor-pointer"size={20}/></a>  
        </div>
    </div>
   </div>
    </div>
  )
}

export default main