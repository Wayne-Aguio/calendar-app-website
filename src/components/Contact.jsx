import React from 'react'
import { motion } from "framer-motion";

const Contact = () => {
  return (
   
    <section id="contact" className="flex min-h-[70vh]] min-w-full items-center justify-center">
         <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
            <h1 className='text-center text-5xl md:text-7xl'>
                <span className='font-bold text-violet-950 bg-clip-text text-transparent'>Get in Touch</span>
            </h1>

            <p className='text-center text-lg font-bold text-black'>
                Want to chat? Send me an E-mail through this button and I'll respond whenever I can.
            </p>

            <a href="mailto:wj1507398@gmail.com" className='text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover-translate-y-2 hover:shadow-xl hover:shadow-indigo-600'>Contact Me</a>
        </motion.div>
    </section>
  )
}

export default Contact