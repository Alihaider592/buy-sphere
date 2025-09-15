

const Newsletter = () => {
    const onsubmitHandler  =(e)=>{
        Event.preventDefault();

    }
  return (
   <div className='text-center px-5 sm:px-10 lg:px-20 py-10'>
  <p className='text-xl sm:text-2xl lg:text-3xl font-medium text-gray-800'>
    Subscribe now and get 20% off
  </p>
  <p className='text-gray-400 mt-3 text-sm sm:text-base lg:text-lg'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, temporibus animi ut eligendi odio consequatur accusamus, eum ex sit quas error fugiat sunt fugit velit repellat deserunt autem explicabo! Totam, aspernatur consectetur unde commodi quia deleniti voluptatibus quas voluptatem natus harum blanditiis veritatis eligendi quos, maxime molestias facilis, doloremque ratione.
  </p>

  <form 
    onSubmit={onsubmitHandler} 
    className='w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto  max-xl:border-hidden max-2xl:border-hidden mt-6 flex flex-col sm:flex-row items-center gap-3 border rounded-lg p-3 sm:p-0'
  > 
    <input 
      className='w-full sm:flex-1 px-4 py-3 sm:py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400' 
      type="email" 
      placeholder='Enter your email' 
      required 
    />
    <button 
      type='submit' 
      className='w-full sm:w-auto bg-blue-600 text-white px-6 py-3 sm:py-2 rounded-lg text-sm sm:text-base hover:bg-blue-700 transition'
    >
      Subscribe
    </button>
  </form>
</div>

  );
}

export default Newsletter;
