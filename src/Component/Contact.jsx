import { RiGithubFill, RiLinkedinBoxFill, RiTwitterFill, RiXboxFill } from '@remixicon/react';
import React,{ useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
    const nameRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-text", {
                duration: 1,
                y : 50,
                ease: "power3.out",
                stagger: 0.3,
                scrollTrigger: {
                    trigger:nameRef.current,
                    start: 'top 80%',
                    toggleActions: "play none none none",
                }
            })
            gsap.from(".contact-icon", {
                duration: 1,
                y : 20,
                opacity: 0,
                ease: "power3.out",
                stagger: 0.3,
                scrollTrigger: {
                    trigger:nameRef.current,
                    start: 'top 80%',
                    toggleActions: "play none none none",
                }
            })
          }, nameRef)
         return () => ctx.revert()
    },[])
  return (
    <section className='py-16 relative' id='contact' ref={nameRef}>
        <div className='px-4 text-center'>
            <h2 className='contact-text mb-8 text-3xl font-medium lg:text-4xl'>Contact</h2>
            <p className='contact-icon mb-4 text-lg lg:text-xl'>
                Feel free to reach to me via email: { ''}
                <a href="mailto:saqibpak00@gmail.com" className='border-b'>saqibpak00@gmail.com</a>
            </p>
            <div className='mt-8 flex justify-center space-x-6'>
                <a href="https://www.linkedin.com/in/saqib-ali-658647198/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='contact-icon'
                    aria-label="Visit my linkedIn Profile">
                   <RiLinkedinBoxFill className='text-3xl' />
                </a>
                <a href="https://github.com/saqib0335"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='contact-icon'
                    aria-label="Visit my Github Profile">
                   <RiGithubFill className='text-3xl' />
                </a>
                <a href="https://x.com/Saqibpak00Ali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='contact-icon'
                    aria-label="Visit my X Profile">
                   <RiTwitterFill className='text-3xl' />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Contact