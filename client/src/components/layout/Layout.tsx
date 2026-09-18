import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-paper text-ink">
            <Header />
            <main className="flex-1 mx-auto w-full max-w-5xl py-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}