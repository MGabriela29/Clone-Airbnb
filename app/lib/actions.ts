'use server';

import { cookies } from "next/headers";

export async function handleLogin(userId:string, accessToken: string, refreshToken: string){
    (await cookies()).set('session_userid',userId,{
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, //One week
        path: '/'
    });
    (await cookies()).set('session_access_token',accessToken,{
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60, //One week
        path: '/'
    });
    (await cookies()).set('session_refresh_token',refreshToken,{
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, //One week
        path: '/'
    });

}