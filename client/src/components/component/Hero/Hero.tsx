import { navbar } from '@/constants/navbar'
import image_4 from '../../../../public/image_4.png'
import image_5 from '../../../../public/image_5.png'
import user_1 from '../../../../public/user_1.png'
import user_2 from '../../../../public/user_2.png'
import user_3 from '../../../../public/user_3.png'
import star_1 from '../../../../public/star_1.png'
import star_2 from '../../../../public/star_2.png'
import star_3 from '../../../../public/star_3.png'
import './index.css'

function Hero() {
    return (
        <main className={`${navbar.pad_x} max-lg:px-10 py-8 h-full flex justify-center items-center`}>
            <section className='w-full flex max-lg:flex-col'>
                <div className='w-1/2 max-lg:w-full flex flex-col gap-6'>
                    <h2 className='font-bold text-[62px] max-md:text-[40px] leading-[72px] max-md:leading-[40px] w-full max-md:text-center'>
                        High Quality
                        NFT Collection
                    </h2>
                    <p className='font-normal text-[22px] max-md:text-[19px] leading-[36px]'>
                        A 890 piece custom Nerko's collection is
                        joining the NFT space on Opensea.
                    </p>
                    <button className='button rounded-[50px] w-[250px] px-[20px] py-[20px] max-md:px-[28px] max-md:py-[13px]'>
                        View in OPENSEA &
                    </button>
                    <section className="profile-section w-full gap-5 flex items-center">
                        <div className="profile-container relative flex justify-start items-center">
                            <img src={user_1} alt="Profile 1" className="profile-image h-[53px] max-md:h-[53px]" />
                            <img src={user_2} alt="Profile 2" className="profile-image h-[53px] max-md:h-[53px]" />
                            <img src={user_3} alt="Profile 3" className="profile-image h-[53px] max-md:h-[53px]" />
                        </div>
                        <div>
                            <h1> 47+k </h1>
                            <span>Community members</span>
                        </div>
                    </section>
                </div>
                <div className='w-1/2 max-lg:w-full image-grid max-lg:mt-5'>
                    <div className='child-image-grid'>
                        <img src={image_4} alt="" />
                    </div>
                    <div className='child-image-grid relative'>
                        <img src={star_3} className='absolute top-0 right-0 z-0' alt="" width={40} />
                        <img src={star_2} className='absolute bottom-16 left-16 z-0' alt="" width={60} />
                    </div>
                    <div className='child-image-grid relative'>
                        <img className='absolute bottom-10 left-10 z-0' src={star_1} alt="" width={60} />
                    </div>
                    <div className='child-image-grid'>
                        <img src={image_5} alt="" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Hero