import Analytics from '@/components/component/Analyitics/Analytics'
import Brands from '@/components/component/Brands/Brands'
import Hero from '@/components/component/Hero/Hero'
import HowItWorks from '@/components/component/HowItWorks/HowItWorks'
import Artists from '@/components/component/MeetTheArtists/Artists'
import RoadMapSection from '@/components/component/RoadmapSection/RoadMapSection'
import Divider from '@/components/component/svg/Divider'

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
            <HowItWorks />
            <div className='flex items-center justify-center mt-28 mb-28'>
                <Divider />
            </div>
            <RoadMapSection />
            <div className='flex items-center justify-center mt-28 mb-28'>
                <Divider />
            </div>
            <Artists />
        </>
    )
}

export default Home