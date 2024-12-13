import { navbar } from '@/constants/navbar'

function Analytics() {
    const analytics = [
        {
            heading: '400k+',
            para: 'Wallets Connected'
        },
        {
            heading: '20k+',
            para: 'Wallets Connected'
        },
        {
            heading: '230+',
            para: 'Creative artists Connected'
        },
        {
            heading: '2.5x',
            para: 'Estimated value'
        },
    ]

    return (
        <main className={`${navbar.pad_x} max-lg:px-10 w-full`}>
            <section className='flex w-full max-md:flex-col max-md:gap-5'>
                {
                    analytics?.map((data, ind) => {
                        return (
                            <div key={ind+data.heading} className='w-1/4 max-md:w-full flex-col justify-center items-center'>
                                <h1 className='text-center font-bold text-[40px]'> {data.heading} </h1>
                                <h6 className='text-center font-normal'> {data.para} </h6>
                            </div>
                        )
                    })
                }
            </section>
        </main>
    )
}

export default Analytics