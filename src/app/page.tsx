import BGFigura from "@/components/figura-background";
import FormIA from "@/components/formIA";
import Banner from "@/components/banner";
import Header from "@/components/header";
import Titulo from "@/components/titulo";
import { Ephesis } from 'next/font/google';
const fuente = Ephesis({ subsets: ["latin"], weight: '400' })

export default function Home() {
  return (
    <div className="h-screen">
      <div className="z-10 relative">
        <Header />
        <Banner >
          <Titulo message="Asesoría Jurídica"/>
          <Titulo fuente={fuente} message="Manquilef"/>
        </Banner>
        <FormIA />
      </div>
      <div className="z-10 relative">
        <BGFigura />
      </div>
    </div>
  )
}
