'use client'

import {signIn} from 'next-auth/react'

export function Login(){
    return (
        <div className="">
        <button  className="bg-slate-700 py-2 px-5 text-slate-200 rounded-lg text-xs uppercase tracking-wider shadow focus:ring focus: ring-slate-500 focus:ring-opacity-1 focus:ring-offset-1 hover:bg-slate-600">Login</button>
        </div>
    )
}