import BGFigura from "@/components/figura-background";
import FormIA from "@/components/formIA";
import Header from "@/components/header";
import Titulo from "@/components/titulo";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="z-50 relative">
        <Header />
        <Titulo message="Este título se ve bacan"/>
        <div className="w-1/3 mx-auto">
        <FormIA />
        </div>
      </div>
      <div className="z-10 relative">
        <BGFigura />
      </div>
    </div>
  )
}
