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
