import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { sidebarLinks } from '@/constants'

const LeftSidebar = () => {
  return (
    <section className='left_sidebar'>
        <nav className='flex flex-col gap-6'>
            <Link href='/' className='flex cursor-pointer items-center gap-1 pb-10 
            max-lg:justify-center'>
                <Image src ='/icons/logo.svg' alt = 'logo' width={23} height={27} />
                <h1 className='text-24 font-extrabold text-white max-lg:hidden'>PodAI</h1>
            </Link>

            {sidebarLinks.map(({ route, label }) => {

                return <Link href={route}>
                    { label }
                </Link>
            })}
        </nav>
    </section>
  )
}

export default LeftSidebar