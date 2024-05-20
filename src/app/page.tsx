'use client'
import Servicios from "@/components/PostServices";
import Banner from "@/components/bannerv2";
import { Tooltip } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="py-3 px-3">
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
  )
}
