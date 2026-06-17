export default function FormSection() {
    return(
        <section id="contact" className="flex w-full items-center justify-center bg-gradient-to-b from-black/90 to-white/65 px-4 py-20 font-black text-gray-200 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                <div className="flex max-w-2xl flex-col items-start justify-center gap-6">
                    <span className="text-4xl font-bold leading-tight text-white sm:text-5xl">Let's grow your content</span>
                    <span className="text-xl font-bold leading-relaxed text-gray-300 sm:text-2xl">If you're serious about performance-driven storytelling and scaling your channel, fill out the details below. I review every inquiry personally.</span>
                    <a href="https://api.whatsapp.com/send?phone=20126407706" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-black underline transition duration-300 hover:text-gray-700 sm:text-3xl">+201226407706</a>
                </div>

                <form onSubmit={(event) => event.preventDefault()} className="flex w-full flex-col items-start justify-center gap-4 rounded-md bg-black/60 p-5 text-start shadow-2xl shadow-black/20 sm:p-8">
                    <span className="text-lg font-bold text-white">Get in Touch:</span>
                    <input type="text" placeholder="Name" aria-label="Name" className="h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:border-white focus:outline-none focus:ring-2 focus:ring-white" />
                    <input type="email" placeholder="Email" aria-label="Email" className="h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:border-white focus:outline-none focus:ring-2 focus:ring-white" />
                    <textarea placeholder="Message" aria-label="Message" className="min-h-28 w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:border-white focus:outline-none focus:ring-2 focus:ring-white"></textarea>
                    <button type="submit" className="cursor-pointer rounded-full bg-gray-300 px-5 py-2 font-bold text-black transition duration-300 hover:bg-gray-400">Submit</button>
                </form>
            </div>
        </section>
    )
}
