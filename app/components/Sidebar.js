"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Constants from '../Constants';

let menuList = Constants.MENU;

export default function SideBar(){
    const router = usePathname();

   return <>
    <nav className="sidebar flex flex-col overflow-y-auto text-center bg-[#fdeee9] w-[350px]">
        <div className="text-5xl">
            <div className="p-4 ml-8 mt-1 flex item-center">
                <h1 className="text-[#ef5225] font-bold">hyre</h1>
            </div>
        </div>
        <ul className="mt-6 px-6">
            {menuList.map(menu=>
                <Link key={menu.id} href={menu.url}>
                    <li className={`grid grid-cols-3 text-sm font-semibold place-content-end p-2 m-4 rounded-xl hover:text-white hover:bg-[#ef5225] ${router == menu.url ? 'text-white bg-[#ef5225]':''}`}>
                        <p className='col-span-1 text-right text-xs mr-2'>-</p>
                        <p className='col-span-2 text-left text-xs'>{menu.name}</p>
                    </li>
                </Link>
            )}
        </ul>
    </nav>
   </>
}