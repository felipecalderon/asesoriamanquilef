'use client'
import BGFigura from "@/components/figura-background";
import FormIA from "@/components/formIA";
import Servicios from "@/components/PostServices";
import Posts from "@/components/Posts";
import BannerOpcional from "@/components/bannerv2";
import { useEffect } from "react";
import { storePosts } from "@/store/postsStore";

export default function Home() {
  const {getPosts} = storePosts()
  useEffect(() => {
    getPosts()
  }, [])
  return (
    <div className="min-h-screen">
      <BannerOpcional />
      <div className="z-10 relative">
        <div className="py-10 px-3">
          <div className="flex flex-col items-center pb-6">
            <p className="text-xl font-semibold pb-3 text-primario">Mi compromiso es brindar un servicio legal compasivo, eficiente y estratégico</p>
            <p className="text-pretty italic max-w-2xl text-center text-slate-700">Ayudándote a enfrentar los desafíos legales con confianza, serenidad y seleridad. <br></br>Con la privacidad y seriedad que cada caso requiere.</p>
          </div>
          <Servicios />
        </div>
      </div>
        {/* <Posts /> */}
      <div className="z-10 relative">
        <FormIA />
        <BGFigura />
      </div>
    </div>
  )
}
