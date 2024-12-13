import Analytics from '@/components/component/Analyitics/Analytics'
import Brands from '@/components/component/Brands/Brands'
import FooterWithImage from '@/components/component/Footer/FooterWithImage'
import Hero from '@/components/component/Hero/Hero'
import HowItWorks from '@/components/component/HowItWorks/HowItWorks'
import Artists from '@/components/component/MeetTheArtists/Artists'
import RoadMapSection from '@/components/component/RoadmapSection/RoadMapSection'
import Divider from '@/components/component/svg/Divider'
import WhyChooseUs from '@/components/component/WhyChooseUs/WhyChooseUs'

function Home() {
    return (
        <>

            <Hero />
            <Brands />
            <div className='flex items-center justify-center mt-28 mb-28'>
                <Divider />
            </div>
            <Analytics />
            <div className='flex items-center justify-center mt-28 mb-28'>
                <Divider />
            </div>
            <WhyChooseUs />
            <div className='flex items-center justify-center mt-28 mb-28'>
                <Divider />
            </div>
            <HowItWorks />
            <div className='flex items-center justify-center mt-28 mb-28'>
                <Divider />
            </div>
            <RoadMapSection />
            <div className='flex items-center justify-center mt-28 mb-28'>
                <Divider />
            </div>
            <Artists />
            <div className='flex items-center justify-center mt-28 mb-28'>
                <Divider />
            </div>
            <FooterWithImage />
        </>
    )
}

export default Home