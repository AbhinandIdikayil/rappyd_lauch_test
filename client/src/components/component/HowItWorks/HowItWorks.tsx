import { navbar } from "@/constants/navbar"
import image_01 from '../../../../public/image_1.png'
import image_02 from '../../../../public/image_2.png'
import image_03 from '../../../../public/image_3.png'
import { Link } from "react-router-dom"
import './index.css'
import { MoveUpRight } from "lucide-react"

function HowItWorks() {
    return (
        <main className={`${navbar.pad_x} w-full max-lg:px-10`}>
            <h2 className="text-center font-bold max-md:text-[42px] max-md:leading-[42px]">
                How it
                <span className="index">
                    works!
                </span>
            </h2>
            <section className="w-full flex-col mt-10">
                <div className="w-full flex max-md:flex-col gap-6">

                    <section className="w-1/2 max-md:w-full">
                        <img src={image_01} alt="How it works illustration" />
                    </section>

                    <section className="w-1/2 max-md:w-full">
                        <div>
                            <h1 className="index font-bold text-[21px] leading-7  max-md:text-center"> 02 </h1>
                            <h1 className="mt-2 text-[56px] max-md:text-[40px] font-bold  max-md:text-center leading-[59px]">
                                Create your own
                                digital artwork
                            </h1>
                        </div>
                        <p className="mt-3 font-normal text-[19px] leading-[30px] text-left w-full">
                            Starting the production on the procedurally generated
                            planets and the smart contract for minting.
                        </p>
                        <p className="font-normal text-[19px] leading-[30px] text-left w-full">
                            Quality comes first. we took our time to plan out everything
                            and build our production pipeline for a good quality
                            artwork's & digital artwork.
                        </p>
                        <h1 className="w-full max-md:text-center max-md:text-[17px] max-md:leading-[18px] font-bold my-7 underline">
                            <Link to={'/'} className="w-full flex justify-center items-center gap-1"> Learn more <MoveUpRight size={15} /> </Link>
                        </h1>
                    </section>


                </div>
                <div className="w-full flex max-md:flex-col gap-6 justify-center items-center">


                    <section className="w-1/2 max-md:w-full">
                        <div>
                            <h1 className="index font-bold text-[21px] leading-7  max-md:text-center"> 02 </h1>
                            <h1 className="mt-2 text-[56px] max-md:text-[40px] font-bold leading-[59px]  max-md:text-center">
                                Create your own
                                digital artwork
                            </h1>
                        </div>
                        <p className="mt-3 font-normal text-[19px] leading-[30px] text-left w-full">
                            Starting the production on the procedurally generated
                            planets and the smart contract for minting.
                        </p>
                        <p className="font-normal text-[19px] leading-[30px] text-left w-full">
                            Quality comes first. we took our time to plan out everything
                            and build our production pipeline for a good quality
                            artwork's & digital artwork.
                        </p>
                        <h1 className="w-full max-md:text-center max-md:text-[17px] max-md:leading-[18px] font-bold my-7 underline">
                            <Link to={'/'} className="w-full flex justify-center items-center gap-1"> Learn more <MoveUpRight size={15} /> </Link>
                        </h1>                    </section>


                    <section className="w-1/2 max-md:w-full">
                        <img src={image_02} alt="How it works illustration" />
                    </section>
                </div>
                <div className="w-full flex max-md:flex-col gap-6">
                    <section className="w-1/2 max-md:w-full">
                        <img src={image_03} alt="How it works illustration" />
                    </section>


                    <section className="w-1/2 max-md:w-full">
                        <div>
                            <h1 className="index font-bold text-[21px] leading-7  max-md:text-center"> 02 </h1>
                            <h1 className="mt-2 text-[56px] max-md:text-[40px] max-md:text-center  font-bold leading-[59px]">
                                Create your own
                                digital artwork
                            </h1>
                        </div>
                        <p className="mt-3 font-normal text-[19px] leading-[30px] text-left w-full">
                            Starting the production on the procedurally generated
                            planets and the smart contract for minting.
                        </p>
                        <p className="font-normal text-[19px] leading-[30px] text-left w-full">
                            Quality comes first. we took our time to plan out everything
                            and build our production pipeline for a good quality
                            artwork's & digital artwork.
                        </p>
                        <h1 className="w-full max-md:text-center max-md:text-[17px] max-md:leading-[18px] font-bold my-7 underline">
                            <Link to={'/'} className="w-full flex justify-center items-center gap-1"> Learn more <MoveUpRight size={15} /> </Link>
                        </h1>                    </section>


                </div>
            </section>
        </main>
    )
}

export default HowItWorks