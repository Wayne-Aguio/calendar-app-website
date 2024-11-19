import React from 'react'
import apk from "../assets/apk.png";
import image1 from "../assets/image.png";
import image2 from "../assets/login.png";
import { motion } from 'framer-motion';

const Download = () => {
  return (
    <motion.div 
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }} 
    className='min-h-screen'>
        <div className='container mx-auto py-16 px-40'>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>

                <div
                className='text-center lg:text-left flex-1'>
        <h1 className='text-4xl lg:text-6xl font-extrabold  text-black'>GET CALENDART APP 
        </h1>
        <h1 className='text-4xl lg:text-6xl  font-extrabold  text-black'> 
        FOR ANDROID</h1>
        <p className='text-lg lg:text-2xl font-semibold text-gray-800 '>List all your tasks, avoid cramming and maximize your time.</p>
        <a href="../assets/Calendart.apk" download>
        <img src={apk} alt="Apk" className='w-36 hover:scale-105 transition-all mt-5 mx-auto lg:mx-0' />
        </a>
        </div>

            <div className='flex-2'>
            
                <img src={image1} alt="image1" className='w-full md:w-[300px] sm:max-w-[250px] cursor-pointer rounded-2xl trnasition-all duration-300 hover:scale-105' />
            </div>
            <div className='flex-1'>
            <img src={image2} alt="image2" className='w-full md:w-[310px] sm:max-w-[255px] cursor-pointer rounded-2xl trnasition-all duration-300 hover:scale-105' />
            </div>
        </div>
     </div>
 </motion.div>
    
  )
}

export default Download;    