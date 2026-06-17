export default function FormSection() {
    return(
        <>
            <section className="bg-gradient-to-b from-black/90 to-white/65 font-black text-gray-200   h-auto w-full flex items-center justify-center">
                <div className="flex items-center  h-215 justify-center  w-full gap-20">
                    <div className='h-auto w-170  justify-center items-start ml-4 pb-5 gap-12  flex flex-col '>
                        <span className='text-5xl font-bold relative top-5 text-white'>Let's grow your content</span>
                        <span className='text-2xl font-bold relative top-5  text-gray-300'>If you're serious about performance-driven storytelling and scaling your channel, fill out the details below. I review every inquiry personally.</span>
                        <a href="https://api.whatsapp.com/send?phone=20126407706" target="_blank" rel="noopener noreferrer" className='text-3xl font-bold relative text-black top-5 underline'>+20126407706</a>
                    </div>
                    <div className='h-90 rounded-md w-175 bg-black/60 text-start items-start  justify-center pl-8  ml-4 pb-5 gap-3  flex flex-col '>
                        <span className='text-lg font-bold  text-white'>Get in Touch:</span>
                        <input type="text" placeholder="Name" className='h-10 w-150 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white focus:border-white' />
                        <input type="email" placeholder="Email" className='h-10 w-150 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white focus:border-white' />
                        <textarea placeholder="Message" className='h-20 w-150 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white focus:border-white'></textarea>
                        <button className='bg-gray-300 cursor-pointer text-black px-4 py-2 rounded-full hover:bg-gray-400 transition duration-300'>Submit</button>
                    </div>
                </div>
            </section>
        </>
    )
}