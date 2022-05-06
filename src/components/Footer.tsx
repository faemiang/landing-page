import { classNames } from '@/utils/styling'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer id="contact" className="py-16 bg-white">
      <div className={classNames(`container`)}>
        <div
          className={classNames(
            `flex w-full`,
            `md:flex-col md:items-center md:space-y-8`
          )}
        >
          <Link to="/" className={classNames(`w-[150px] inline-block`)}>
            <StaticImage
              src="../images/logo.png"
              alt="Fae-Miang Café logo"
              quality={100}
              className="pointer-events-none"
            />
          </Link>

          <div
            className={classNames(
              `ml-auto flex flex-col space-y-1`,
              `md:ml-0 md:text-center`
            )}
          >
            <p>Fae-Miang Café</p>
            <p>แฟ-เมี่ยงคาเฟ่ Doi Saket,</p>
            <p>Chiang Mai 50220</p>
          </div>
          <div
            className={classNames(
              `ml-10 flex flex-col space-y-1`,
              `md:ml-0 md:text-center`
            )}
          >
            <a
              href="tel:0612842882"
              className="font-sans text-lg underline hover:opacity-50 transition-opacity lg:text-base"
            >
              061 284 2882
            </a>
            <a
              href="mailto:faemiang2020@gmail.com"
              className="font-sans text-lg underline hover:opacity-50 transition-opacity lg:text-base"
            >
              faemiang2020@gmail.com
            </a>
            <a
              href="https://www.facebook.com/FaeMiangCafe"
              target="_blank"
              className="font-sans text-lg underline hover:opacity-50 transition-opacity lg:text-base"
            >
              @FaeMiangCafe
            </a>
          </div>
        </div>

        <p className={classNames(`mt-10 text-gray-500`, `md:text-center`)}>
          &copy;{new Date().getFullYear()} Fae-Miang Café. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
