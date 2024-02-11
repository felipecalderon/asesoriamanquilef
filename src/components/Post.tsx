import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function Post({autor, content, id, title, image}: {autor:string, content:string, id:string, title: string, image: string}) {
  return (
    <Card className="py-4 w-fit bg-fuchsia-300">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny font-bold">Creado por: {autor}</p>
        <h4 className="font-bold text-large text-violet-900 uppercase">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={270}
        />
      </CardBody>
    </Card>
  );
}