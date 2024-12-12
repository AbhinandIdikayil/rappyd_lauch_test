import { footer, navbar } from "@/constants/navbar"
import NFTHub_logo from "../svg/NFTHub_logo"

function Footer() {
  return (
    <div className={`bg-background ${navbar.pad_x} ${footer.pad_y} ${footer.pad_b} ${footer.mt_t} max-lg:px-10`}>
      <footer className="flex max-md:flex-col justify-between items-center">


        <div className="w-[410px] max-md:w-auto">
          <NFTHub_logo />
          <p>
            Join our Discord channel or follow us on
            Twitter to keep up to date with our latest work
            and announcements.
          </p>

        </div>

        <section className="flex justify-between w-[410px] max-md:w-full max-md:flex-col max-md:gap-4 max-md:mt-3">
          <div>
            <h3 className="mb-2 font-bold">Quick link</h3>
            <ul className="font-light">
              <li>About</li>
              <li>Collection</li>
              <li>Roadmap</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-bold">Community</h3>

            <ul className="font-light">
              <li>About</li>
              <li>Collection</li>
              <li>Roadmap</li>
              <li>FAQs</li>
            </ul>

          </div>
        </section>
      </footer>
    </div>
  )
}

export default Footer