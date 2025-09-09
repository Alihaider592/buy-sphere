import React from 'react';

const Newsletter = () => {
    const onsubmitHandler  =(e)=>{
        Event.preventDefault();

    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
      <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, temporibus animi ut eligendi odio consequatur accusamus, eum ex sit quas error fugiat sunt fugit velit repellat deserunt autem explicabo! Totam, aspernatur consectetur unde commodi quia deleniti voluptatibus quas voluptatem natus harum blanditiis veritatis eligendi quos, maxime molestias facilis, doloremque ratione.</p>
      <form onSubmit={onsubmitHandler} className=']w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-6'> 
        <input className='w-full flex-1 outline-none' type="email" placeholder='Enter your email' required />
        <button type='Submit' className='bg-blue-600 text-white text-xs px-10 py-4'> Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;
