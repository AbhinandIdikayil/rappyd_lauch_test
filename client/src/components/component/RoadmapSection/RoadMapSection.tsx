import { navbar } from '@/constants/navbar'
import './index.css'

function RoadMapSection() {
    const constants = {
        width: '416px',
        height: "459px",
        max_width: "416px",
        left: "416px",
        padding: "0px 24px 48px 24px",
        gap: "0px",
        opacity: "0px",
    }
    const heading = {
        fontSize: "64px",
        fontWeight: "700",
        lineHeight: "64px",
        textAlign: "center",
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
    }
    const arr = [
        '',
        '',
        '',
        '',
        '',
    ]
    return (
        <main className={`${navbar.pad_x} max-md:px-10`}>
            <h2 className={`mb-24 flex  max-md::flex-col items-center justify-center`} style={{ ...heading }}>
                Nfthub's
                <span className='gradient-text capitalize ml-3'>
                    Roadmap
                </span>
            </h2>
            <div className='container' >

                {
                    arr?.map(elem => (
                        <div style={{ border: '0.5px solid' }} className={` border-solid rounded-[32px] child-container flex flex-col gap-4  w-[${constants.width}] h-[${constants.height}] px-8 py-8`}>
                            <span className='text-[16px] font-bold leading-4 uppercase'> phase 0 </span>
                            <h1 className='text-[32px] leading-8 font-bold capitalize'>heading</h1>
                            <p>
                                Quality comes first. we took our
                                time to plan out everything and
                                build our production pipeline for
                                a good quality artworks.
                            </p>
                            <div></div>
                            <hr />
                            <div></div>
                            <span> Launch the project </span>
                            <span> Launch the project </span>
                            <span> Launch the project </span>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}

export default RoadMapSection