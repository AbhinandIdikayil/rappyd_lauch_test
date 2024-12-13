import { navbar } from '@/constants/navbar'
import FileIcon from '../svg/FileIcon'
import './index.css'
import CheckMarkIcon from '../svg/Check-mark-icon'
import TopResource from '../svg/TopResource'
import Community from '../svg/Community'
function WhyChooseUs() {
    const choose = [
        {
            heading: 'Huge Collection',
            icon: <FileIcon />
        },
        {
            heading: 'High quality',
            icon: <CheckMarkIcon />
        },
        {
            heading: 'Top resource',
            icon: <TopResource />
        },
        {
            heading: 'Big community',
            icon: <Community />
        },
    ]
    return (
        <div className={`${navbar.pad_x} max-md:px-5`}>
            <main className='container-choose'>
                {
                    choose?.map((elem, ind) => (
                        <div key={elem.heading + ind} style={{ border: '0.5px solid' }} className='child-container-choose rounded-[24px] flex flex-col gap-5 px-[33px] pt-[49px] pb-[33px border-solid]'>
                            {elem.icon}
                            <h1 className='font-bold text-[28px] leading-[30px]'> {elem.heading} </h1>
                            <p className='text-[17px] leading-[17px] font-normal'>
                                A collection of 890
                                unique Nerkos built to go
                                beyond the digital space.
                            </p>
                        </div>
                    ))
                }


            </main>
        </div>
    )
}

export default WhyChooseUs