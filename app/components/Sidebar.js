"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideBar(){
    const router = usePathname();

   return <>
    <nav className="sidebar flex flex-col overflow-y-auto text-center bg-orange-50 w-[400px]">
        <div className="text-5xl">
            <div className="p-4 ml-8 mt-1 flex item-center">
                <h1 className="text-orange-500 font-bold">hyre</h1>
            </div>
        </div>
        <ul className="mt-6 px-6">
            <Link href={"/"}>
                <li>
                    <p className={`text-sm font-semibold place-content-end p-2 m-4 rounded-xl hover:text-white hover:bg-orange-500 ${router == '/' ? 'text-white bg-orange-500':''}`}>Dashboard</p>
                </li>
            </Link>
            <Link href={"/earnings"}>
                <li className={`text-sm font-semibold p-2 m-4 rounded-xl hover:text-white hover:bg-orange-500 ${router == '/earnings' ? 'text-white bg-orange-500':''}`}>
                    My Earnings
                </li>
            </Link>
        </ul>
    </nav>
   </>
}