import BGFigura from "@/components/figura-background";
import FormIA from "@/components/formIA";
import { Ephesis } from 'next/font/google';
import Image from "next/image";
import Servicios from "@/components/servicios";
import LineaDeTiempo from "@/components/timeline";

const fuente = Ephesis({ subsets: ["latin"], weight: '400' })
import { cursosOtros } from "@/constants/cursosOtros";
import Posts from "@/components/Posts";
import BannerOpcional from "@/components/bannerv2";
import Service from "@/components/service";
import { servicios } from "@/constants/serviciosDetalle";

export default function Home() {
  return (
    <div className="min-h-screen">
      <BannerOpcional />
      <div className="z-10 relative">
        <div className="py-10">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {servicios.map(({ autor, content, id, title, image }) => <Service key={id} autor={autor} content={content} id={id} title={title} image={image} />)}
          </div>
        </div>
        <div className="flex flex-col-reverse px-6 items-center md:items-start text-center sm:text-left md:flex-row gap-12 md:px-20 py-10 justify-center">
          <Image className="shadow-lg rounded-2xl hover:scale-105 hover:shadow-2xl hover:-translate-y-4 transition-all" src={'/barbara-foto-vertical.jpg'} alt="Foto vertical" width={400} height={900} />
          <div className="max-w-xl">
            <h1 className="dark:text-white text-2xl font-semibold">¡Hola! Soy Barbara, estoy para ayudarte..</h1>
            <h3><i>Con más de 5 años de experiencias en diversos casos</i></h3>
            <Servicios />
            <LineaDeTiempo info={cursosOtros} title="Mi desarrollo profesional" />
          </div>
        </div>
        <Posts />
      </div>
      <div className="z-10 relative">
        <FormIA />
        <BGFigura />
      </div>
    </div>
  )
}
