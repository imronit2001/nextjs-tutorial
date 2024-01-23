import { NextResponse } from "next/server";

export async function GET(req) {
    // console.log(req)

    /** Headers */
    const requestHeaders = new Headers(req.headers);
    console.log(requestHeaders);

    /** Params */
    // const {searchParams} = req.nextUrl.searchParams;
    const {searchParams} = new URL(req.url);
    console.log(searchParams);
    console.log(searchParams.get("course"));


    return NextResponse.json({ msg: "John Doe" });
}