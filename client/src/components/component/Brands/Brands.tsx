import { navbar } from "@/constants/navbar"
import BitGo from "../svg/Brands/BitGo"
import Coinbase from "../svg/Brands/Coinbase"
import Exodus from "../svg/Brands/Exodus"
import Metamak from "../svg/Brands/Metamak"
import TrustWallet from "../svg/Brands/TrustWallet"

function Brands() {
    return (
        <div className={`${navbar.pad_x} max-lg:px-10 flex max-md:flex-col max-md:gap-10 justify-center items-center gap-4`}>
            <Metamak />
            <BitGo />
            <Coinbase />
            <TrustWallet />
            <Exodus />
        </div>
    )
}

export default Brands