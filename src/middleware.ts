import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthServices"

// Role Type
type Role = keyof typeof roleBasedRoutes;
const authRoututes = ['/login', '/register']
const roleBasedRoutes = {
  Customer: [/^\/user/, /^\/profile/, /^\/checkout/],
  Admin: [/^\/admin/],
};
export const middleware = async (request:NextRequest) =>{
    // Get Path Name
    const {pathname} = request.nextUrl
    // Get User Info
    const userInfo = await getCurrentUser()
    // Check Path and User Info
    if(!userInfo){
        if(authRoututes.includes(pathname)){
            return NextResponse.next()
        }else{
            return NextResponse.redirect(
              new URL(
                `${process.env.NEXT_PUBLIC_CLIENT_BASE_URL}/login?redirectPath=${pathname}`
              )
            );
        }
    }

    // Check Role
    if(userInfo?.role && roleBasedRoutes[userInfo?.role as Role]){
      const routes = roleBasedRoutes[userInfo?.role as Role];
      if(routes.some(route => pathname.match(route)))
        return NextResponse.next()
    }

      return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/login", "/register", '/profile', '/checkout', '/admin', '/admin/:page'],
};