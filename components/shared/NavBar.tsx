"use client"
import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { Button } from '../ui/button'
import NavProfile from './NavProfile'
import Link from 'next/link'

const NavBar = () => {
    const onSearchClick = () => {
        alert('Search Clicked');
    }
    return (
        <header className='fixed w-full h-16 bg-background z-10 shadow-md flex items-center'>
            <div className='main-container flex justify-between items-center flex-1'>
                <div className='flex justify-start items-center gap-4'>
                    <Link href={"/"} className='text-xl lg:text-3xl text-foreground'>Eventia</Link>
                    <div>
                        <Button onClick={onSearchClick} variant={'outline'} className='gap-4 cursor-text hidden md:flex md:pr-auto lg:pr-60'>
                            <FaMagnifyingGlass className='text-muted-foreground' />
                            <span className='text-muted-foreground hidden md:flex'>Search for Movies, Events, Plays, Sports and Activities</span>
                        </Button>
                    </div>

                </div>
                <NavProfile onSearchClick={onSearchClick} />
            </div>
        </header>
    )
}

export default NavBar