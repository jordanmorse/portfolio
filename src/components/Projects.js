import React from 'react'

export default function Projects() {

    return (
        <main className="bg-red-200 min-h-screen" >
            <section className="container mx-auto">
                <h1 className="text-6xl styled-text flex justify-center">My Projects</h1>
                <h3 className="text-lg text-gray-500 flex justify-center mb-12">Take a look!</h3>
                <section className="grid grid-cols-2 gap-9">
                    <article className="relative shadow-xl bg-white p-10">
                        <a href='https://github.com/jordanmorse/notetaker'><h4 className='text-white-800 text-4xl font-bold'>Note Taker</h4>
                        </a>
                        <div className="text-white-700 space-x4">
                            <span>
                                <strong className="font-bold">Completed 2020</strong>
                            </span>
                            <span>
                            <p className='my-6 text-lg text-grey-600 '>An app for taking and storing notes. Found it very handy in class!</p>
                            </span>
                            <a href='https://github.com/jordanmorse/notetaker' className="text-red-500 font-bold hover:underline hover:text-red-400">
                                Click here to see the project!
                            </a>
                        </div>
                    </article>
                    <article className="relative shadow-xl bg-white p-10">
                        <a href='https://github.com/jordanmorse/fitnesstracker'><h4 className='text-white-800 text-4xl font-bold'>Fitness Tracker</h4>
                        </a>
                        <div className="text-white-700 space-x4">
                            <span>
                                <strong className="font-bold">Completed 2020</strong>
                            </span>
                            <span>
                            <p className='my-6 text-lg text-grey-600 '>A convenient app for keeping track of the exercises you do over time.</p>
                            </span>
                            <a href='https://github.com/jordanmorse/fitnesstracker' className="text-red-500 font-bold hover:underline hover:text-red-400">
                                Click here to see the project!
                            </a>
                        </div>
                    </article>
                    <article className="relative shadow-xl bg-white p-10">
                        <a href='https://github.com/jordanmorse/progressivebudget'><h4 className='text-white text-4xl font-bold'>Progressive Budget</h4>
                        </a>
                        <div className="text-white-700 space-x4">
                            <span>
                                <strong className="font-bold">Completed 2020</strong>
                            </span>
                            <span>
                            <p className='my-6 text-lg text-grey-600 '>An application for helping people track their expenses while they travel.</p>
                            </span>
                            <a href='https://github.com/jordanmorse/progressivebudget' className="text-red-500 font-bold hover:underline hover:text-red-400">
                                Click here to see the project!
                            </a>
                        </div>
                    </article>
                </section>
             </section>
        </main>
    )
}