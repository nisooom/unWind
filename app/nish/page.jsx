import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

const Shop = () => {
  return (
    <div className='w-full h-full justify-center items-center flex'>
        
        <div className="w-32 h-10 flex absolute right-3 top-1 padding-10 border-accent border rounded-xl">
            
            <span className='text-white flex justify-center items-center pl-2'>🍀10</span>

        </div>


        <div className="w-4/5 h-4/5 bg-util border-white border-2 rounded-xl bg-opacity-20">
            
            
            <div className="w-full h-1/3 border-b border-white">
                <div className='h-full w-full '>
                    <Carousel className="justify-center items-center">
                        <CarouselContent className="">
                            <CarouselItem className="md:basis-1/2 lg:basis-1/2 w-full h-full border border-white ">Hello</CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/2 w-full h-full">My Name is</CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/2 w-full h-full">Slim Shady</CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Shop