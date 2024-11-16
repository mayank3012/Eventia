"use client"
import React from 'react'
import { ModeToggle } from './modeToggle'
import { FaChevronDown, FaMagnifyingGlass } from 'react-icons/fa6'
import { Button } from '../ui/button'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useRouter } from 'next/navigation'
interface IProps{
    onSearchClick: ()=>void
}
const NavProfile = ({onSearchClick}:IProps) => {
    const router = useRouter();
    const onSignInClick = () => {
        router.push("/auth/signIn")
    }
    return (
        <>
        <div className='items-center gap-4 hidden md:flex'>
            <Button variant={'link'} className='gap-2 hover:no-underline'>Bareilly <FaChevronDown size={10} /></Button>
            <Button onClick={onSignInClick}>Sign In</Button>
            <ModeToggle />
        </div>
        <div className='flex items-center gap-4 md:hidden'>
            <a className='bg-transparent text-black' onClick={onSearchClick}><FaMagnifyingGlass size={20}/></a>
            <a className='bg-transparent text-black'><GiHamburgerMenu size={20}/></a>
        </div>
        </>
    )
}

export default NavProfile