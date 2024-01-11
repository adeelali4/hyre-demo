"use client"

import { usePathname } from "next/navigation"
import Constants from "../Constants"

export default function TopBar(){
  const path = usePathname();
  let obj = Constants.MENU.find(x=> x.url == path);
  if(obj == null){
    obj = {
      name : ""
    };
  }

    return <>
      <nav className="flex items-center justify-between flex-wrap p-4">
        <div className="flex items-center flex-shrink-0">
          <span className="font-semibold text-xl tracking-tight">{obj.name}</span>
        </div>
        <div className="w-full lg:w-auto flex flex-wrap items-center">
          <div>
            <button>
              
            </button>
          </div>
          <div>
            <button type="button" className="flex rounded-full focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-600" id="user-menu-button-2" aria-expanded="false" data-dropdown-toggle="dropdown-2">
              <span className="sr-only">Open user menu</span>
              <img className="w-10 h-10 rounded-full" src="https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-smoky-eyes-makeup-pretty-young-adult-girl-posing-studio-closeup-attractive-female-face_186202-4439.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704844800&semt=ais" alt="user photo"/>
            </button>
          </div>
        </div>
      </nav>
    </>
}