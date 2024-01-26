import BGFigura from "@/components/figura-background";
import FormIA from "@/components/formIA";
import Banner from "@/components/banner";
import Titulo from "@/components/titulo";
import { Ephesis } from 'next/font/google';
import dynamic from "next/dynamic";
import Snav from "@/components/skeletons/Snav";
import Image from "next/image";
import Servicios from "@/components/servicios";

const Header = dynamic(() => import('@/components/header'), { ssr: false, loading: () => <Snav /> })
const fuente = Ephesis({ subsets: ["latin"], weight: '400' })


export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="z-10 relative">
        <Header />
        <Banner >
          <Titulo message="Asesoría Jurídica" />
          <Titulo fuente={fuente} message="Manquilef" />
        </Banner>
        <div className="flex flex-row gap-3 px-20 py-10 justify-center">
          <Image className="shadow-2xl" src={'/barbara-foto-vertical.jpg'} alt="Foto vertical" width={300} height={700} />
          <div className="max-w-xl">
            <h1 className="dark:text-white">¡Hola! Soy Barbara y quiero ayudarte..</h1>
            <h3><i>Con más de 5 años de experiencias en diversos casos</i></h3>
            <Servicios />
            <p></p>
          </div>
        </div>

      </div>
      <div className="z-10 relative">
        <FormIA />
        <BGFigura />
      </div>
    </div>
  )
}
