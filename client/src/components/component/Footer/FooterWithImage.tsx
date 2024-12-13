import footerImage from '../../../../public/footer/footer.png'
function FooterWithImage() {
    return (
        <div className={`relative max-md:h-[430px]`}>
            <img src={footerImage} className='w-full h-full object-cover' />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-[96px] leading-[96px] max-md:text-[46px] max-md:leading-[46px] font-bold text-center'> Let's start <span className='gradient'> minting</span>  </h1>
                <p className='text-[22px] leading-[33px] font-normal text-center mt-6'>invest and manage all you NFTs at once</p>
                <div className='flex justify-center items-center mt-6'>
                    <button className='button rounded-[50px]   px-[40px] pt-[18px] pb-[19px]'>
                        Get started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FooterWithImage