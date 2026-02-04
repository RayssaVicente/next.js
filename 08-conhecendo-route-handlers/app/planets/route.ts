import { NextRequest, NextResponse } from "next/server";



export function GET(req: NextRequest){
  return NextResponse.json({hello: "Hello, word!"})
}

export function POST(req: NextRequest){
  return NextResponse.json({status: "created"})
}

