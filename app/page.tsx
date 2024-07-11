
import { DataPackCarousel } from "@/components/DataPackCarousel";
import AppContainer from "@/components/DownloadAppContainer";
import { NewsCarousel } from "@/components/NewsCarousel";
import PickSimContainer from "@/components/PickSimContainer";
import RootCarousel from "@/components/RootCarousel";
import StepContainer from "@/components/StepContainer";
import { ToppingCarousel } from "@/components/ToppingCarousel";
import Button from "@/components/ui/SaymeeButton";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <RootCarousel />
      <StepContainer />
      <PickSimContainer />
      <div style={{ backgroundImage: "urL('/discoveryBG.png')", backgroundSize: 'cover' }} className="w-full text-center pt-[60px] pb-9">
        <DataPackCarousel />
        <ToppingCarousel />

      </div>

      <AppContainer />

      <NewsCarousel />

      <div className="w-full flex justify-center mb-10">
        <div className="w-[50%] flex justify-center">
          <Button title={"Xem thêm"} height={'50px'} width={'60%'} />
        </div>

      </div>



    </div>
  )
}
