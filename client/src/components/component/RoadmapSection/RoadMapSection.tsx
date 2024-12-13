import { navbar } from '@/constants/navbar'
import './index.css'
import CheckMarkIcon from '../svg/Check-mark-icon'
import React from 'react'

function RoadMapSection() {
    // const constants = {
    //     width: '416px',
    //     height: "459px",
    //     max_width: "456px",
    //     left: "416px",
    //     padding: "0px 24px 48px 24px",
    //     gap: "0px",
    //     opacity: "0px",
    // }
    const heading:React.CSSProperties = {
        fontSize: "64px",
        fontWeight: "700",
        lineHeight: "64px",
        textAlign: "center",
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
    }
    const arr = [
        {
            heading: 'Planning'
        },
        {
            heading: 'Production'
        },
        {
            heading: 'Launch'
        },
        {
            heading: 'Minting'
        },
        {
            heading: 'New ntfs'
        },
        {
            heading: 'Metaverse'
        },
    ]
    return (
        <main className={`${navbar.pad_x} max-md:px-5`}>
            <h2 className={`mb-24 flex  max-md:flex-col items-center justify-center`} style={{ ...heading }}>
                Nfthub's
                <span className='gradient-text capitalize ml-3'>
                    Roadmap
                </span>
            </h2>
            <div className="container">
                {arr?.map((elem, index) => (
                    <div
                        key={index}
                        style={{ border: '0.5px solid' }}
                        className={`relative border-solid rounded-[32px] child-container 
                            flex flex-col gap-4 w-full max-h-[459px] px-[30px] py-[21px]`}
                    >
                        <div
                            className="rotate-45 font-bold absolute right-4 top-4 w-[50px] h-[50px] 
                    rounded-[25px] percentage_button leading-[20px] overflow-hidden flex items-center justify-center"
                        >
                            <h1 className="text-center text-[27px]">0</h1>
                            <h1 className="text-center">%</h1>
                        </div>
                        <span className="gradient-text text-[16px] font-bold leading-4 uppercase">
                            phase 0{index + 1}
                        </span>
                        <h1 className="text-[32px] leading-8 font-bold capitalize">{elem?.heading}</h1>
                        <p>
                            Quality comes first. We took our time to plan everything and build our
                            production pipeline for good-quality artworks.
                        </p>
                        <div />
                        <hr />
                        <div />
                        <h1 className="flex gap-2">
                            <CheckMarkIcon />
                            Launch the project
                        </h1>
                        <h1 className="flex gap-3">
                            <CheckMarkIcon />
                            Grow community
                        </h1>
                        <h1 className="flex gap-3">
                            <CheckMarkIcon />
                            Release website and logo
                        </h1>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default RoadMapSection