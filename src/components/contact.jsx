import React from 'react'

const contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
    <h1 className='text-4xl font-bold text-center text-[#001]'>CONTACT</h1>
<form action='' method='POST' encType='multipart/form-data'>
    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
        <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>NAME</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name'/>
        </div>
        <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone Number</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone'/>
        </div>
        </div>
        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Email</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='name' />
        </div>
        <div  className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>subject</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='name'/>
        </div>
        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Message</label>
            <textarea rows='10' className='border-2 rounded-lg p-3 border-gray-300' name='mssg'></textarea>
        </div>
        <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'> Send Message</button>
    
</form>
</div>
  )
}

export default contact