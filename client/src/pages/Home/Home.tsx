import Analytics from '@/components/component/Analyitics/Analytics'
import Hero from '@/components/component/Hero/Hero'
import HowItWorks from '@/components/component/HowItWorks/HowItWorks'
import RoadMapSection from '@/components/component/RoadmapSection/RoadMapSection'
import Divider from '@/components/component/svg/Divider'

function Home() {
    return (
        <>
            <div className='h-[80px]'>

            </div>
            <Hero />
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
        </>
    )
}

export default Home