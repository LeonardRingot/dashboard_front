import { NextResponse } from 'next/server'

import { useRouter } from 'next/router'
import { redirect } from 'next/dist/server/api-utils';


export function middleware(request) {
    const  verify = request.cookies.get("user");
    let url = request.url
    const URLCheck1 = `${process.env.NEXT_PUBLIC_URL_DASHBOARD_FOLDER}`
   const  URLReturn = `${process.env.NEXT_PUBLIC_URLRETURN}`
  
    
    if(!verify && url.includes(URLCheck1 ))
    {
        return NextResponse.redirect(URLReturn);
    }
    
}

