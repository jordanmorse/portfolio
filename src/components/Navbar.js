import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { NavLink } from 'react-router-dom'


export default function Nav() {
    return (
        <header className='bg-red-600'>
            <div className='container m-auto flex justify-between'>
                <nav className="flex">
                    <NavLink 
                        activeClassName="text-white bg-red-900"
                        className="inflex-flex tracking-widest items-center py-6 px-5 mr-4 text-red-100 hover:text-yellow-600 text-2xl font-bold styled-text" 
                        exact to='/'
                    >
                        Jordan Morse
                    </NavLink>
                    <NavLink 
                        activeClassName="text-white bg-red-900"
                        className="inline-flex items-center py-3 py-x my-6 rounded text-red-200 hover:text-yellow-500"
                        to='/projects'
                    >
                        My Projects
                    </NavLink>
                    <NavLink 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-yellow-500"
                        activeClassName="text-white bg-red-900"
                        to='/about'
                    >
                        About Me
                    </NavLink>
                </nav>
                <div className='inline-flex px-3 py-3 mt-3'>
                    <SocialIcon url="https://github.com/jordanmorse" 
                    className="mr-4" target="_blank" 
                    fgColor="#fff" 
                    style={{height: 35, width:35}} />
                    <SocialIcon url="https://www.linkedin.com/in/jordan-morse-339287173/" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{height: 35, width:35}} />
                </div>
            </div>
        </header>
    )
}