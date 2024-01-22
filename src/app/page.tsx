import BGFigura from "@/components/figura-background";
import FormIA from "@/components/formIA";
import Banner from "@/components/banner";
import Titulo from "@/components/titulo";
import { Ephesis } from 'next/font/google';
import dynamic from "next/dynamic";
import Snav from "@/components/skeletons/Snav";
import LoginForm from "@/components/ui/LoginForm";

const Header = dynamic(() => import('@/components/header'), {ssr: false, loading: () => <Snav />})
const fuente = Ephesis({ subsets: ["latin"], weight: '400' })

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="z-10 relative">
        <Header />
        <Banner >
          <Titulo message="Asesoría Jurídica"/>
          <Titulo fuente={fuente} message="Manquilef"/>
        </Banner>
        <LoginForm />
        <FormIA />
      </div>
      <div className="z-10 relative">
        <BGFigura />
      </div>
    </div>
  )
}
