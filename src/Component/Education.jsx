import React, {useRef, useEffect} from 'react'
import { EDUCATION } from '../constants';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Education = () => {
    const educationRef = useRef(null);
    
        useEffect(() => {
            const ctx = gsap.context(() => {
              gsap.from(".edu-card", {
                  duration: 1,
                  y : 50,
                  opacity: 0,
                  ease: "power3.out",
                  stagger: 0.3,
                  scrollTrigger: {
                      trigger:educationRef.current,
                      start: 'top 80%',
                      toggleActions: "play none none none",
                  }
              })
            }, educationRef)
            return ()=> ctx.revert( )
  }, [])
    
  return (
    <section className='py-16' id='education' ref={educationRef}>
        <div className='mx-auto max-w-full px-4'>
            <h2 className='mb-8 text-center text-3xl font-medium lg:text-4xl'>
                Education
            </h2>
            <div className='flex flex-col space-y-8'>
               {EDUCATION.map((edu, index) => (
                <div key={index} className='edu-card rounded-xl border border-purple-300/20 p-6'>
                    <h3 className='mb-2 text-lg lg:text-2xl'>{edu.degree}</h3>
                    <h4 className='text-lg font-medium lg:text-xl'>{edu.institution}</h4>
                    <p className='text-sm lg:text-base'>{edu.duration}</p>
                    <p className='mt-4 lg:text-base'>{edu.description}</p>
                </div>
               ))}
            </div>
        </div>
    </section>
  )
}

export default Education