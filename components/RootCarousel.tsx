
"use client";

import { Carousel } from "flowbite-react";

export default function RootCarousel() {
  return (
    <div >
      <Carousel slide={false} className="h-[35vw] rounded-none">
        <img className="h-full w-auto object-cover"   src="/root1.jpg" alt="..." />
        <img className="h-full w-auto object-cover"  src="/root2.jpg" alt="..." />
        <img className="h-full w-auto object-cover"  src="/root3.jpg" alt="..." />
        <img className="h-full w-auto object-cover"  src="/root4.jpg" alt="..." />
        
      </Carousel>
    </div>
  );
}
