'use client'
import { IPost } from "@/constants/interfaces-local";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { ClientModal } from "@/components/posts/client-post-modal";
import { useState } from "react";

export default function SinglePost({ post }: {post: IPost}) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Card className="py-2 w-fit max-w-xs bg-secundarioClaro min-h-[370px]" isPressable onPress={() => setOpen(true)}>
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
            <ClientModal isOpen={isOpen} onOpenChange={() => setOpen(!isOpen)} post={post} />
        </>
    );
}
