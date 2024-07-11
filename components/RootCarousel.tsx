
"use client";

import { Carousel } from "flowbite-react";

export default function RootCarousel() {
  return (
    <div className=" block overflow-auto" >
      <Carousel slide={false} className="h-[35vw] hidden laptop:block">
        <img className="h-full w-auto object-cover" src="/root1.jpg" alt="..." />
        <img className="h-full w-auto object-cover" src="/root2.jpg" alt="..." />
        <img className="h-full w-auto object-cover" src="/root3.jpg" alt="..." />
        <img className="h-full w-auto object-cover" src="/root4.jpg" alt="..." />

      </Carousel>

      <Carousel slide={false} className="h-[160vw] block laptop:hidden">
        <img className="h-full w-auto object-cover" src="/root5.png" alt="..." />
        <img className="h-full w-auto object-cover" src="/root6.png" alt="..." />
        <img className="h-full w-auto object-cover" src="/root7.jpg" alt="..." />

      </Carousel>
    </div>
  );
}
