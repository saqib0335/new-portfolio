import React, { useEffect, useRef } from 'react';
import { EXPERIENCES } from '../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const experienceRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".experience-item", {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
                stagger: 0.3,
                scrollTrigger: {
                    trigger: experienceRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });
        }, experienceRef);

        return () => ctx.revert(); // Cleanup
    }, []);

    return (
        <section className='py-16' id='work' ref={experienceRef}>
            <div className='mx-auto max-w-4xl px-4'>
                <h2 className='mb-12 text-center text-3xl font-medium lg:text-4xl'>Experience</h2>
                <div className='flex flex-col space-y-12'>
                    {EXPERIENCES.map((role, index) => (
                        <div key={index} className='experience-item flex flex-col items-start justify-between md:flex-row'>
                            <div className='w-full text-sm font-semibold text-stone-300 md:w-1/4 lg:text-lg'>
                                {role.yearRange}
                            </div>
                            <div className='w-full md:w-3/4'>
                                <h3 className='mb-2 text-lg lg:text-2xl'>
                                    {role.role} -{" "}
                                    <span className='bg-gradient-to-b from-purple-400 to-pink-200 bg-clip-text text-transparent'>
                                        {role.company}
                                    </span>
                                </h3>
                                <p className='mb-4 text-sm lg:text-base'>{role.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
