import { NextResponse } from 'next/server'
import {useCookies} from 'react-cookie'
function validCookie(request){
    return (request.cookies.get("user"));
}

export function middleware(request) {
    if(request.url.includes('/dashboard') && !validCookie(request)) {
        return NextResponse.redirect("http://:3000/")
    }
}

// See "Matching Paths" below to learn more
// export const m_config = {
//   matcher: ['/dashboard/*']
// }