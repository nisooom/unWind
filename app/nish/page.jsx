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
            
            
            {/* <div className="w-full h-1/3 "> */}

                {/* <div className=''>
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
            </div> */}


            <div className="w-full h-2/3 flex-row justify-center items-center border-0">

                <div className="bg-util bg-opacity-20 rounded-xl flex h-24 w-full flex-row space-x-2 space-y-2">
                    <div>
                        <Image src={"/imgs/dummy2.png"} width={88} height={88} className='pl-2 pt-4'></Image>
                    </div>

                    <div className="w-full">
                        <h1 className="text-white text-l font-bold ">Plant A Tree</h1>
                        <p className="text-white text-[12px] text-wrap">Use your points to plant a tree and help reduce carbon emmisions!</p>
                    </div>

                    <div className="w-full">
            
                        <span className='text-white text-sm flex'>🍀10</span>

                    </div>
                </div>
                
            </div>


        </div>
    </div>
  )
}

export default Shop