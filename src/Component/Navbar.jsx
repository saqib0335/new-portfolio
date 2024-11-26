import React, {useState} from 'react'
import { NAVIGATION_LINKS } from '../constants'
import { RiCloseLine, RiMenu3Line } from '@remixicon/react'


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleTodo = () =>{
    setMobileMenuOpen(!mobileMenuOpen)
  }
  const handleSubmit = (e, href) =>{
    e.preventDefault();
    const targetElement = document.querySelector(href)
    if(targetElement){
        const offset = -85;
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY + offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div>
        <nav className='fixed left-0 right-0 z-50 lg:top-4'>
            <div className='mx-auto hidden max-w-xl items-center justify-center rounded-full border border-white/30
            py-2 backdrop-blur-lg lg:flex'>
                <div className='flex items-center justify-between gap-6'>
                    <div>
                        <a href='/'>
                        <span className='uppercase'>Saqib Ali</span>
                        </a>
                    </div>
                    <div>
                        <ul className='flex items-center gap-4'>
                           {NAVIGATION_LINKS.map((item, index) =>(
                            <li key={index}>
                                <a href={item.href}  onClick={(e) =>handleSubmit(e, item.href)} 
                                className='text-sm hover:text-stone-300'>{item.label}</a>
                            </li>
                           ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className='py-2 backdrop-blur-md lg:hidden'>
                <div className='flex items-center justify-between'>
                    <div>
                        <a href='#'>
                            <span className='pl-2 uppercase'>Saqib</span>
                        </a>
                    </div>
                    <div className='flex items-center'>
                        <button className='focus:outline-none lg:hidden' onClick={toggleTodo}
                        aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}>{mobileMenuOpen ? (
                            <RiCloseLine className='m-2 h-6 w-5'/>
                        ) : (
                            <RiMenu3Line className='m-2 h-6 w-5'/>
                        )}</button>
                    </div>
                </div>
                {mobileMenuOpen && (
                    <ul className='my-4 ml-4 flex flex-col gap-6 backdrop-blur-md'>
                         {NAVIGATION_LINKS.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} onClick={(e) =>handleSubmit(e, item.href)} className="block w-full text-lg">
                                    {item.label}
                                </a>
                            </li>
                         ))}
                    </ul>
                )}
            </div>
        </nav>
    </div>
  )
}

export default Navbar