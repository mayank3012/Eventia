import React from 'react'
import { ModeToggle } from './modeToggle'
import { FaChevronDown, FaMagnifyingGlass } from 'react-icons/fa6'
import { Button } from '../ui/button'

const NavBar = () => {
    return (
        <header className='fixed w-full h-16 bg-background z-10 shadow-md flex items-center'>
            <div className='main-container flex justify-between items-center flex-1'>
                <div className='flex justify-start items-center gap-4'>
                    <h1 className='text-xl lg:text-3xl text-foreground'>Eventia</h1>
                    <div>
                        <Button variant={'outline'} className='flex gap-4 cursor-text pr-60'>
                            <FaMagnifyingGlass className='text-muted-foreground' />
                            <span className='text-muted-foreground'>Search for Movies, Events, Plays, Sports and Activities</span>
                        </Button>
                    </div>

                </div>
                <div className='flex items-center gap-4'>
                    <Button variant={'link'} className='gap-2 hover:no-underline'>Bareilly <FaChevronDown size={10} /></Button>
                    <Button>Sign In</Button>
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}

export default NavBar