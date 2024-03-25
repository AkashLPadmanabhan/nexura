import { NextResponse } from "next/server"

export function middleware(request){
    console.log("Middleware called...")
    console.log(request.nextUrl.pathname)
    if(request.nextUrl.pathname == '/userslist/100'){
        return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.json({ message: "Middleware executed" }, { status: 200 })
}

export const config = {
    matcher: ['/userslist/:path*']
}