'use client'

import {signIn} from 'next-auth/react'

export function Login(){
    return (
        <div className="">
        <button onClick={()=> signIn()} className="bg-slate-700 py-2 px-3 text-slate-200 rounded-lg text-xs tracking-wider shadow focus:ring focus: ring-slate-500 focus:ring-opacity-1 focus:ring-offset-1">Sign in</button>
        </div>
    )
}