import { NextResponse } from 'next/server'
import {useCookies} from 'react-cookie'
function validCookie(request){
    return (request.cookies.get("user"));
}
const myURL = 'http://localhost:3000/dashboard/'

export function middleware(request) {
    if(request.url.includes(myURL) && !validCookie(request)) {
        return NextResponse.redirect("http://localhost:3000/")
    }
}

// See "Matching Paths" below to learn more
// export const m_config = {
//   matcher: ['/dashboard/*']
// }