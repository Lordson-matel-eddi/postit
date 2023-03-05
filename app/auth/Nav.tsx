import Link from "next/link"
import { Login } from "./Login"
import { getServerSession } from "next-auth/next"
import authOptions from '../api/auth/[...nextauth]'

export default async function Navbar() {
    const session = await getServerSession(authOptions)
    console.log(session)
    return (
        <nav className="h-16 px-5 flex justify-between items-center backdrop-blur-md border-b border-slate-300 text-slate-700">
            <Link href={"/"}>
            <h1 className="tracking-wide font-bold text-slate-600 text-xl">Postit.</h1>
            </Link>
            <Login />
        </nav>
    )
}