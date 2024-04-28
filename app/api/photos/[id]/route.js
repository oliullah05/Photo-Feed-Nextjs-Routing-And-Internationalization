import { getPhotoById } from "@/lib/image-data";
import { NextRequest, NextResponse } from "next/server"

export const GET = async(request,{params})=>{

const photoId = params?.id;

const data = getPhotoById(photoId)

return NextResponse.json(data)
}