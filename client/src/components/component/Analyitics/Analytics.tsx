import { navbar } from '@/constants/navbar'

function Analytics() {
    return (
        <main className={`${navbar.pad_x} max-lg:px-10 w-full`}>
            <section className='flex w-full max-md:flex-col max-md:gap-5'>
                <div className='w-1/4 max-md:w-full flex-col justify-center items-center'>
                     <h1 className='text-center font-bold text-[40px]'> 400K+ </h1>
                    <h6 className='text-center font-normal'> Wallets connected</h6>
                </div>
                <div className='w-1/4 max-md:w-full flex-col justify-center items-center'>
                     <h1 className='text-center font-bold text-[40px]'> 400K+ </h1>
                    <h6 className='text-center font-normal'> Wallets connected</h6>
                </div>
                <div className='w-1/4 max-md:w-full flex-col justify-center items-center'>
                     <h1 className='text-center font-bold text-[40px]'> 400K+ </h1>
                    <h6 className='text-center font-normal'> Wallets connected</h6>
                </div>
                <div className='w-1/4 max-md:w-full flex-col justify-center items-center'>
                     <h1 className='text-center font-bold text-[40px]'> 400K+ </h1>
                    <h6 className='text-center font-normal'> Wallets connected</h6>
                </div>
            </section>
        </main>
    )
}

export default Analytics