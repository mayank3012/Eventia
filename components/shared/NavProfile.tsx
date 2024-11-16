"use client"
import React from 'react'
import { ModeToggle } from './modeToggle'
import { FaChevronDown, FaMagnifyingGlass } from 'react-icons/fa6'
import { Button } from '../ui/button'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useRouter } from 'next/navigation'
import {useSession} from "next-auth/react";
import { ImProfile } from 'react-icons/im'
interface IProps{
    onSearchClick: ()=>void
}
const NavProfile = ({onSearchClick}:IProps) => {
    const {data:session, status} = useSession();
    const router = useRouter();

    
    const onSignInClick = () => {
        router.push("/auth/signIn")
    }
    return (
        <>
        <div className='items-center gap-4 hidden md:flex'>
            <Button variant={'link'} className='gap-2 hover:no-underline'>Bareilly <FaChevronDown size={10} /></Button>
            {status == "loading" ? null
            : status == "unauthenticated"?<Button onClick={onSignInClick}>Sign In</Button>
            : <p>{session?.user?.name}</p>}
            <ModeToggle />
        </div>
        <div className='flex items-center gap-4  md:hidden'>
        <a className='bg-transparent text-black hidden sm:flex' onClick={onSearchClick}><FaMagnifyingGlass size={20}/></a>
            {status == "loading" ? null
            : status == "unauthenticated"?<Button onClick={onSignInClick}><ImProfile size={20}/></Button>
            : <p>{session?.user?.name}</p>}
            <a className='bg-transparent text-black'><GiHamburgerMenu size={20}/></a>
        </div>
        </>
    )
}

export default NavProfile