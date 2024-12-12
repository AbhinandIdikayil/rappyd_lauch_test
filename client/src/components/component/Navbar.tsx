import { ToggleTheme } from "./ToggleTheme"
import { navbar } from "@/constants/navbar"
import NFTHub_logo from "./svg/NFTHub_logo"
import SocialMedia from "./common/SocialMedia"
import Navbar_mobile from "./Navbar_Mobile/Navbar_mobile"
import { useRef } from "react"
function Navbar() {
    const navbarRef = useRef<HTMLElement | null>();
    const toggleNavbar = () => {
        if (navbarRef?.current) {
            if (navbarRef?.current.classList) {
                navbarRef?.current?.classList?.remove("translate-x-[100%]");
            }
        }
    };

    return (
        <>
            <nav ref={navbarRef} style={{ zIndex: 99 }} className="lg:hidden w-full z-30 bg-black fixed grid content-start gap-20 grid-cols-3 p-4 inset-y-0 left-0 
                transform  transition-transform duration-300 ease-in-out lg:relative lg:w-auto lg:translate-x-0 
                translate-x-[100%]">
                <Navbar_mobile ref={navbarRef} />
            </nav>
            <nav className="fixed  z-50 w-full h-[80px] bg-background">
                <main className={`flex justify-between items-center ${navbar.pad_x} ${navbar.pad_y} max-lg:px-10 max-sm:px-3`}>
                    <div>
                        <NFTHub_logo />
                    </div>
                    <div className="max-md:hidden">
                        {
                            navbar.topCenter?.map(elem => (
                                <span style={{ fontWeight: '700', marginLeft: '20px' }} className="text-[14px] leading-4 "> {elem} </span>
                            ))
                        }
                    </div>
                    <div className="flex gap-2 items-center">
                        <SocialMedia />

                        <div className="mx-1">
                            <svg onClick={toggleNavbar} className="hidden max-md:block" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2 14.1H3.9C2.83333 14.1 1.91667 13.7167 1.15 12.95C0.383333 12.1833 0 11.2667 0 10.2V3.9C0 2.83333 0.383333 1.91667 1.15 1.15C1.91667 0.383333 2.83333 0 3.9 0H10.2C11.2667 0 12.1833 0.383333 12.95 1.15C13.7167 1.91667 14.1 2.83333 14.1 3.9V10.2C14.1 11.2667 13.7167 12.1833 12.95 12.95C12.1833 13.7167 11.2667 14.1 10.2 14.1ZM3.9 1.9C3.3 1.9 2.81667 2.08333 2.45 2.45C2.08333 2.81667 1.9 3.3 1.9 3.9V10.2C1.9 10.7333 2.08333 11.2 2.45 11.6C2.81667 12 3.3 12.2 3.9 12.2H10.2C10.7333 12.2 11.2 12 11.6 11.6C12 11.2 12.2 10.7333 12.2 10.2V3.9C12.2 3.3 12 2.81667 11.6 2.45C11.2 2.08333 10.7333 1.9 10.2 1.9H3.9ZM26.1 14.1H19.8C18.7333 14.1 17.8167 13.7167 17.05 12.95C16.2833 12.1833 15.9 11.2667 15.9 10.2V3.9C15.9 2.83333 16.2833 1.91667 17.05 1.15C17.8167 0.383333 18.7333 0 19.8 0H26.1C27.1667 0 28.0833 0.383333 28.85 1.15C29.6167 1.91667 30 2.83333 30 3.9V10.2C30 11.2667 29.6167 12.1833 28.85 12.95C28.0833 13.7167 27.1667 14.1 26.1 14.1ZM19.8 1.9C19.2667 1.9 18.8 2.08333 18.4 2.45C18 2.81667 17.8 3.3 17.8 3.9V10.2C17.8 10.7333 18 11.2 18.4 11.6C18.8 12 19.2667 12.2 19.8 12.2H26.1C26.7 12.2 27.1833 12 27.55 11.6C27.9167 11.2 28.1 10.7333 28.1 10.2V3.9C28.1 3.3 27.9167 2.81667 27.55 2.45C27.1833 2.08333 26.7 1.9 26.1 1.9H19.8ZM23 30C21.7333 30 20.55 29.6833 19.45 29.05C18.35 28.4167 17.4833 27.5667 16.85 26.5C16.2167 25.4333 15.9 24.2667 15.9 23C15.9 21.7333 16.2167 20.55 16.85 19.45C17.4833 18.35 18.35 17.4833 19.45 16.85C20.55 16.2167 21.7333 15.9 23 15.9C24.2667 15.9 25.4333 16.2167 26.5 16.85C27.5667 17.4833 28.4167 18.35 29.05 19.45C29.6833 20.55 30 21.7333 30 23C30 24.2667 29.6833 25.4333 29.05 26.5C28.4167 27.5667 27.5667 28.4167 26.5 29.05C25.4333 29.6833 24.2667 30 23 30ZM23 17.8C21.5333 17.8 20.3 18.3 19.3 19.3C18.3 20.3 17.8 21.5167 17.8 22.95C17.8 24.3833 18.3 25.6 19.3 26.6C20.3 27.6 21.5167 28.1 22.95 28.1C24.3833 28.1 25.6 27.6 26.6 26.6C27.6 25.6 28.1 24.3833 28.1 22.95C28.1 21.5167 27.6 20.3 26.6 19.3C25.6 18.3 24.4 17.8 23 17.8ZM10.2 30H3.9C2.83333 30 1.91667 29.6167 1.15 28.85C0.383333 28.0833 0 27.1667 0 26.1V19.8C0 18.7333 0.383333 17.8167 1.15 17.05C1.91667 16.2833 2.83333 15.9 3.9 15.9H10.2C11.2667 15.9 12.1833 16.2833 12.95 17.05C13.7167 17.8167 14.1 18.7333 14.1 19.8V26.1C14.1 27.1667 13.7167 28.0833 12.95 28.85C12.1833 29.6167 11.2667 30 10.2 30ZM3.9 17.8C3.3 17.8 2.81667 18 2.45 18.4C2.08333 18.8 1.9 19.2667 1.9 19.8V26.1C1.9 26.7 2.08333 27.1833 2.45 27.55C2.81667 27.9167 3.3 28.1 3.9 28.1H10.2C10.7333 28.1 11.2 27.9167 11.6 27.55C12 27.1833 12.2 26.7 12.2 26.1V19.8C12.2 19.2667 12 18.8 11.6 18.4C11.2 18 10.7333 17.8 10.2 17.8H3.9Z" fill="#741FF5" />
                            </svg>
                        </div>

                        <div className="max-md:hidden">
                            <ToggleTheme />
                        </div>

                    </div>
                </main>
            </nav>

        </>
    )
}

export default Navbar