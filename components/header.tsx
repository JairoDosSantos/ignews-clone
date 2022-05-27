import { useState } from "react";

//Next
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

//Internal Components
import LoginButton from "./buttonLogin";


//External Components
import { MenuAlt1Icon } from '@heroicons/react/solid'

const Header: NextPage = () => {

    const [active, setActive] = useState('home')
    return (
        <header
            className="border-b border-b-headerBorderBottom flex sm:justify-center justify-between items-center w-full h-20">
            <div className="flex items-center justify-start sm:justify-start sm:w-1/2 space-x-16 px-4">

                <MenuAlt1Icon className="h-5 w-5 text-orangeNews sm:hidden" />
                <span className="hidden sm:flex">
                    <Image src='/ig.news.svg' height={75} width={75} />
                </span>
                <ul className="sm:flex sm:gap-3 hidden">
                    <li className={`title ${active === 'home' ? 'active' : 'text-headtitleDisable'}`}
                        onClick={() => setActive('home')}>
                        <Link href="/" >Home</Link>
                    </li>
                    <li className={`title ${active === 'posts' ? 'active' : 'text-headtitleDisable'}  `}
                        onClick={() => setActive('posts')}>
                        <Link href="/posts" >Posts</Link>
                    </li>
                </ul>

            </div>

            <LoginButton />

        </header >
    )
}

export default Header;