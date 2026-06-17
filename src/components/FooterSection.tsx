import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { Link } from "react-router";

export default function FooterSection() {
    return(
        <footer className="w-full border-t border-white/10 bg-black px-4 py-10 text-gray-200 sm:px-6 lg:px-8">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
                <div className="grid gap-8 md:grid-cols-[1fr_auto_auto] md:items-center">
                    <div className="flex flex-col gap-2">
                        <Link to="/" className="w-fit text-2xl font-black text-white transition duration-300 hover:text-gray-300 sm:text-3xl">Shady Nader</Link>
                        <span className="max-w-md text-sm font-semibold leading-relaxed text-gray-400 sm:text-base">Lead Editor & Team Manager specializing in high-retention YouTube storytelling.</span>
                    </div>

                    <nav className="flex flex-wrap gap-x-6 gap-y-3 text-base font-bold sm:text-lg">
                        <Link to="/" className="text-gray-300 transition duration-300 hover:text-white">Home</Link>
                        <Link to="/portfolio" className="text-gray-300 transition duration-300 hover:text-white">Portfolio</Link>
                        <Link to="/clients" className="text-gray-300 transition duration-300 hover:text-white">Clients</Link>
                        <a href="#contact" className="text-gray-300 transition duration-300 hover:text-white">Contact</a>
                    </nav>

                    <div className="flex items-center gap-3">
                        <a href="https://www.instagram.com/shadynader/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-500 text-2xl font-black transition duration-300 hover:border-white hover:bg-white hover:text-black"><FaInstagram /></a>
                        <a href="https://www.facebook.com/shadynader/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-500 text-2xl font-black transition duration-300 hover:border-white hover:bg-white hover:text-black"><TiSocialFacebookCircular /></a>
                    </div>
                </div>

                <div className="flex flex-col gap-2 border-t border-white/10 pt-6 text-sm font-semibold text-gray-500 sm:flex-row sm:items-center sm:justify-between">
                    <span>Copyright 2024 Shady Nader. All rights reserved.</span>
                    <span>Built for retention. Designed to scale.</span>
                </div>
            </div>
        </footer>
    )
}
