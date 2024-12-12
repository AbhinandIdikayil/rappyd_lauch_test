import HowItWorks from '@/components/component/HowItWorks/HowItWorks'
import RoadMapSection from '@/components/component/RoadmapSection/RoadMapSection'
import Divider from '@/components/component/svg/Divider'

function Home() {
    return (
        <>
            <HowItWorks />
            <div className='flex items-center justify-center mt-28 mb-28'>
                <Divider />
            </div>
            <RoadMapSection />
        </>
    )
}

export default Home