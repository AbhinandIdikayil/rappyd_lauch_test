import { navbar } from "@/constants/navbar"
import artitst_1 from '/artists/image_01.png'
import artitst_2 from '/artists/image_2.png'
import artitst_3 from '/artists/image_3.png'
import artitst_4 from '/artists/image_4.png'
import './index.css'
import Logos from "./Logos"
function Artists() {
  return (
    <div className={`w-full ${navbar.pad_x} max-lg:px-5 max-md:px-2`}>

      <h1 className="text-[64px] max-md:text-[42px] max-md:leading-[42px] leading-[64px] font-bold text-center">
        Meet <span className="gradient ">
          the artists
        </span>
      </h1>

      <main className="artist-grid mt-16 relative">

        <div className="artist-child flex flex-col w-full items-center gap-5">
          <div style={{ border: '0.5px solid' }} className="w-[160px] h-[160px] rounded-[32px] border-solid  p-3 bg-slate-100 dark:bg-white dark:bg-opacity-25">
            <img className="rounded-[25px] object-contain  w-full h-full" src={artitst_1} alt="" />
          </div>
          <div>
            <h1 className="text-[22px] leading-[22px] font-bold text-center"> Steps jobs </h1>
            <h2 className="text-center font-normal text-[16px] leading-[16px] mt-3"> Artists </h2>
            <div className=" mt-3">
              <Logos />
            </div>
          </div>
        </div>


        <div className="artist-child flex flex-col w-full items-center gap-5">
          <div style={{ border: '0.5px solid' }} className="w-[160px] h-[160px] rounded-[32px] border-solid  p-3 bg-slate-100 dark:bg-white dark:bg-opacity-25">
            <img className="rounded-[25px] object-contain  w-full h-full" src={artitst_2} alt="" />
          </div>
          <div>
            <h1 className="text-[22px] leading-[22px] font-bold text-center"> Steps jobs </h1>
            <h2 className="text-center font-normal text-[16px] leading-[16px] mt-3"> Artists </h2>
            <div className=" mt-3">
              <Logos />
            </div>
          </div>
        </div>


        <div className="artist-child flex flex-col w-full items-center gap-5">
          <div style={{ border: '0.5px solid' }} className="w-[160px] h-[160px] rounded-[32px] border-solid  p-3 bg-slate-100 dark:bg-white dark:bg-opacity-25">
            <img className="rounded-[25px] object-contain  w-full h-full" src={artitst_3} alt="" />
          </div>
          <div>
            <h1 className="text-[22px] leading-[22px] font-bold text-center"> Steps jobs </h1>
            <h2 className="text-center font-normal text-[16px] leading-[16px] mt-3"> Artists </h2>
            <div className=" mt-3">
              <Logos />
            </div>
          </div>
        </div>

        <div className="artist-child flex flex-col w-full items-center gap-5">
          <div style={{ border: '0.5px solid' }} className="w-[160px] h-[160px] rounded-[32px] border-solid  p-3 bg-slate-100 dark:bg-white dark:bg-opacity-25">
            <img className="rounded-[25px] object-contain  w-full h-full" src={artitst_4} alt="" />
          </div>
          <div>
            <h1 className="text-[22px] leading-[22px] font-bold text-center"> Steps jobs </h1>
            <h2 className="text-center font-normal text-[16px] leading-[16px] mt-3"> Artists </h2>
            <div className=" mt-3">
              <Logos />
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}

export default Artists