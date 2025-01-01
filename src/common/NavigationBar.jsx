import React, { Fragment } from 'react'

const NavigationBar = () => {
    return (
        <Fragment>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-lg shadow-lg border-b border-white/20 m-4 rounded-full">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">

                        {/* Logo */}
                        <p to="/" className="text-lg font-bold text-[#f2e9e4]">
                            BookStore .
                        </p>

                        {/* Navigations */}
                        <div className="hidden md:flex space-x-6 gap-5">
                            <p to="/" className="hover:text-white hover:scale-105 hover:font-semibold hover:cursor-pointer text-[#f2e9e4]">Home</p>
                            <p to="/about" className="hover:text-white hover:scale-105 hover:font-semibold hover:cursor-pointer text-[#f2e9e4]">About</p>
                            <p to="/services" className="hover:text-white hover:scale-105 hover:font-semibold hover:cursor-pointer text-[#f2e9e4]">Services</p>
                            <p to="/contact" className="hover:text-white hover:scale-105 hover:font-semibold hover:cursor-pointer text-[#f2e9e4]">Contact</p>
                        </div>

                        {/* Burger button */}
                        <div className="md:hidden">
                            <button className="text-2xl focus:outline-none text-white">&#9776;</button>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default NavigationBar