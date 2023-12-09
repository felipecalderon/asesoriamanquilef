import BGFigura from "@/components/figura-background";
import FormIA from "@/components/formIA";
import Header from "@/components/header";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="z-50 relative">
        <Header />
        <Banner />
        <FormIA />
      </div>
      <div className="z-10 relative">
        <BGFigura />
      </div>
    </div>
  )
}
