import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const Shop = () => {
  return (
    <div className='w-full h-full justify-center items-center flex'>
        
        <div className="w-4/5 h-4/5 bg-util border-white border-2 rounded-xl bg-opacity-20">
            
            
            <div className="w-full h-1/3 ">

                <div className=''>
                    <Carousel className="">
                        <CarouselContent>
                            <CarouselItem className="h-64">
                            
                                <Image fill={true} src="/imgs/dummy.jpg" alt="placeholder" className='rounded-xl' />
                            
                            </CarouselItem>
                            <CarouselItem className="">
                            
                                <Image fill={true} src="/imgs/dummy2.png" alt="placeholder" className='rounded-xl' />
                            
                            </CarouselItem>
                            <CarouselItem className="">
                                
                                <Image fill={true} src="/imgs/dummy3.png" alt="placeholder" className='rounded-xl' />
                            
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>


            <div className="w-full h-2/3 flex-row justify-center items-center border-0">
                <div className="bg-util bg-opacity-20 rounded-xl flex h-16 w-full">
                    <span>
                        <Image src={"/imgs/dummy2.png"} width={64} height={64}></Image>
                    </span>
                </div>
                
            </div>


        </div>
    </div>
  )
}

export default Shop