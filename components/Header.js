import React, { useEffect } from 'react'
import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'

import { HomeIcon } from '@heroicons/react/solid'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import {modalState} from "../atoms/modalAtom"
function Header() {
  const { data: session } = useSession();
  const router =useRouter();
  const [ open,setOpen] = useRecoilState(modalState);

  return (
    <div className="sticky top-0 z-50 border-0 bg-white shadow-sm">
      <div className="mx-5 flex max-w-6xl justify-between xl:mx-auto">
        <div onClick={()=> router.push('/') } className="relative hidden  w-24 cursor-pointer lg:inline-grid ">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div onClick={()=> router.push('/') } className="relative w-10 flex-shrink-0 cursor-pointer lg:hidden">
          <Image
            src="https://1000logos.net/wp-content/uploads/2017/02/insta-logo.png"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>

        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3">
            <div className="insert-y-0 pointer-events-none absolute  flex items-center pl-3">
              <SearchIcon className="mt-2  h-5 w-5 text-gray-500 " />
            </div>
            <input
              className="block w-full  rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-black focus:ring-black sm:text-sm"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={()=> router.push('/') } className="navBtn" />
          <MenuIcon className="h-6 w-6 cursor-pointer md:hidden" />

          {session ? (
            <>
              <div className="navBtn relative ">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-1 -right-2 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white ">
                  5
                </div>
              </div>

              <PlusCircleIcon onClick={()=> setOpen(true)} className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
              onClick={signOut}
                src={session?.user?.image}
                alt="profile"
                className="h-10 w-10 cursor-pointer rounded-full"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
