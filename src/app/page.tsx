'use client'
import BGFigura from "@/components/figura-background";
import FormIA from "@/components/formIA";
import Servicios from "@/components/PostServices";
import BannerOpcional from "@/components/bannerv2";
import { useEffect } from "react";
import { storePosts } from "@/store/postsStore";
import { Tooltip } from "@nextui-org/react";
import UTM from "@/components/utmCard";
import { getIndicadores } from "@/utils/getIndicadores";
import { indicadoresStore } from "@/store/indicadores";

export default function Home() {
  const { getPosts } = storePosts()
  const { setIndicadores } = indicadoresStore()
  useEffect(() => {
    getPosts()
    getIndicadores()
      .then(res => setIndicadores(res))
  }, [])
  return (
    <div className="min-h-screen pb-10">
      <BannerOpcional />
      <div className="z-10 relative">
        <div className="py-10 px-3">
          <div className="flex flex-col items-center pb-6">
            <p className="text-pretty text-xl max-w-xl font-semibold pb-3 text-center text-primario">Mi compromiso es brindar un servicio jurídico personalizado, eficiente y estratégico, con enfoque&nbsp;
              <Tooltip
                showArrow={true}
                size="md"
                placement="bottom"
                color="secondary"
                content="Protejo los derechos de todos, incluídos los animales no humanos">
                <span className="font-bold italic hover:text-xl hover:rotate-2 transition-all">antiespecista</span>
              </Tooltip>.</p>
            <p className="text-pretty italic max-w-2xl text-center text-slate-700">Te ayudaré a enfrentar los problemas con confianza y celeridad.</p>
          </div>
          <Servicios />
        </div>
      </div>
      <div className="hidden md:block max-w-sm mx-auto">
        <UTM />
      </div>
      <div className="z-10 relative">
        <FormIA />
        <BGFigura />
      </div>
    </div>
  )
}
