import { NextResponse } from 'next/server'
import {useCookies} from 'react-cookie'
import { useRouter } from 'next/router'
import { redirect } from 'next/dist/server/api-utils';
// function validCookie(request){
//     return (request.cookies.get("user"));
// }


export function middleware(request) {
    let verify = request.cookies.get("user");
    let url = request.url
    const URLCheck1 = '/dashboard/' 
    const URLCheck2 = 'http://localhost:3000/dashboard/consultcandidat'

   
    if(!verify && url.includes(URLCheck1 ))
    {
        return NextResponse.redirect('http://localhost:3000/');
    }
    
}

// See "Matching Paths" below to learn more
// export const m_config = {
//   matcher: ['/dashboard/*']
// }