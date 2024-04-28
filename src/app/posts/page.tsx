'use client'
import CreateNewPost from "@/components/posts/create-post"
import { storePosts } from "@/store/postsStore";
import { Accordion, AccordionItem, Card, CardBody, CardHeader, Image, Selection } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PostsPage() {
  const { getPosts, posts } = storePosts()
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["2"]));
  const router = useRouter()
  const redirectToPost = (id: string) => {
    router.push(`/posts/${id}`)
  }

  useEffect(() => { getPosts() }, [])

  if (posts.length > 0) return (
    <div className="pt-3 mx-auto max-w-4xl">
      <Accordion 
        // defaultSelectedKeys={"2"} 
        selectedKeys={selectedKeys} 
        onSelectionChange={setSelectedKeys} 
        selectionMode="multiple">

        <AccordionItem key="1"
          aria-label="nueva publicacion"
          subtitle="Haz clic aquí para crear una nueva publicación"
          title="Nueva publicación">
          <CreateNewPost changeSelect={setSelectedKeys} />
        </AccordionItem>

        <AccordionItem key="2"
          aria-label="posts"
          subtitle="Muestra u oculta las publicaciones haciendo clic aquí"
          title="Servicios & Noticias">
          <div className="grid grid-cols-3 justify-items-center mt-6">
            {
              posts.map(post => (
                <Card key={post.id} className="py-2 w-fit max-w-xs bg-secundarioClaro min-h-[370px]" isPressable onPress={() => redirectToPost(post.id)}>
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-center justify-center">
                    <p className="text-tiny italic text-slate-600">{post.subtitle}</p>
                    <h4 className="font-semibold text-large text-primario">{post.title}</h4>
                  </CardHeader>
                  <CardBody className="py-2 flex flex-col items-center justify-between">
                    <Image
                      className="object-cover rounded-xl max-h-52"
                      alt="Card background"
                      src={post.image}
                      width={250}
                      height={250}
                    />
                    <p className="text-sm font-semibold text-primario text-center">{post.category}</p>
                  </CardBody>
                </Card>
              ))
            }
          </div>
        </AccordionItem>

      </Accordion>
    </div>
  )

}