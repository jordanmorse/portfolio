import React from 'react'
import image from '../myphoto.jpg'
import anotherImage from '../background.jpg'

export default function About() {
    return (
        <main className="relative bg">
            <img src={anotherImage} className='absolute w-full'></img>
            <div className="p-10 mx-auto relative container">
                <section className='bg-red-500 absolute'>
                    <img src={image} className='w-36 h-48' />
                    <div className='text-lg flex flex-col justify-center'>
                        <h1 className="text-6xl custom-text text-white mb-4">
                            Nice to meet you!
                        </h1>
                        <div className="prose text-white">
                        <p>After graduating from Cleveland State University with a degree in Political Science,
                             I went on to attend the Case Western Reserve University Full Stack Web Development program.
                              My academic career has solidified my interest in creative problem solving and was a driving factor in my interest in coding and web development
                            . I am passionate about creating web pages that are just as aesthetically pleasing as they are functional. I have utilized HTML/CSS/Bootstrap, Javascript/JQuery to create a variety of applications. I also have experience with Node.js, React and mySQL and MongoDB. 
                            Based in Cleveland, Ohio, I am available to discuss your web development needs via video conference, phone call or email.</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}