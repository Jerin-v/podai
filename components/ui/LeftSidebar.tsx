import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const LeftSidebar = () => {
  return (
    <section className='left_sidebar'>
        <nav className='flex flex-col gap-6'>
            <Link href='/'>
                <Image src ='/icons/logo.svg' alt = 'logo' width={23} height={27} />
            </Link>
        </nav>
    </section>
  )
}

export default LeftSidebar