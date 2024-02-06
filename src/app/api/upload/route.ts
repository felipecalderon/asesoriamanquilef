import { uploadFile } from "@/utils/uploadFile";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {        
        const data = await req.formData()
        const file: File | null = data.get('file') as File
        if(!file){
            return NextResponse.json({success: false})
        }
        const subida = await uploadFile(file);
        return NextResponse.json(subida)
    } catch (error) {
        return NextResponse.json(error)
    }
}