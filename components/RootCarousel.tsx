
"use client";

import { Carousel } from "flowbite-react";

export default function RootCarousel() {
  return (
    <div className="h-56 sm:h-80 xl:h-[500px] ">
      <Carousel>
        <img src="/root1.jpg" alt="..." />
        <img src="/root2.jpg" alt="..." />
        <img src="/root3.jpg" alt="..." />
        <img src="/root4.jpg" alt="..." />
        
      </Carousel>
    </div>
  );
}
