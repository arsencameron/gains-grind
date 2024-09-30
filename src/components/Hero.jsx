import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>gains<span className='text-red-500'>grind</span></h1>
                <p>By Arsen Cameron</p>
            </div>
            <Button text={"Lock in"}></Button>
        </div>
    )
}
