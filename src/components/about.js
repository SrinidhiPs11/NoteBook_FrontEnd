import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const About = () => {
    return (
        <>
            <Navbar />
            <div className='h-screen  flex justify-between flex-col '>
            <div className="px-4 py-8">
                <h1 className="text-4xl font-bold mb-6">About Notebook</h1>
                <p className="mb-6">Notebook is a powerful and user-friendly note-taking application designed to help you organize your thoughts, ideas, and information efficiently.</p>
                
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="mb-6">Our mission is to provide a seamless and intuitive platform for users to capture, store, and manage their notes across all devices.</p>
                
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>Secure user authentication</li>
                    <li>Create, edit, and delete notes</li>
                    <li>Cloud synchronization for access anywhere</li>
                    <li>More amazing feature will be added so stay tuned!</li>
                </ul>
                         
                <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back to Home</Link>
            </div>
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>© {new Date().getFullYear()} Notebook. All rights reserved.</p>
                </div>
            </footer>
            </div>
        </>
    )
}

export default About