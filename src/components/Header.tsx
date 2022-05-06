import React, { FC, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { classNames } from '@/utils/styling'

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header
      className={classNames(
        `flex items-center justify-center w-full py-8`,
        `lg:pt-5`
      )}
    >
      <div className="container flex items-center">
        <Link to="/" className={classNames(`w-[150px] inline-block z-50`)}>
          <StaticImage
            src="../images/logo.png"
            alt="Fae-Miang Café logo"
            quality={100}
            className="pointer-events-none"
          />
        </Link>

        <div
          className={classNames(
            `ml-auto z-50 mr-[1rem] relative hidden`,
            `lg:inline-block`
          )}
        >
          {!isOpen && (
            <button
              className={classNames(
                `text-primary w-[2rem] h-[2rem] flex items-center justify-center`
              )}
              onClick={() => setIsOpen(true)}
            >
              <i className="gg-menu"></i>
            </button>
          )}
          {isOpen && (
            <button
              className={classNames(
                `text-primary w-[2rem] h-[2rem] flex items-center justify-center`
              )}
              onClick={() => setIsOpen(false)}
            >
              <i className="gg-close"></i>
            </button>
          )}
        </div>

        <nav
          className={classNames(
            `ml-auto`,
            `lg:fixed lg:inset-0 lg:bg-white lg:z-40 lg:flex lg:items-center lg:justify-center lg:transition`,
            isOpen
              ? `lg:transform lg:translate-y-0 lg:opacity-100`
              : `lg:transform lg:-translate-y-1/2 lg:pointer-events-none lg:opacity-0`
          )}
        >
          <ul
            className={classNames(
              `flex items-center space-x-8`,
              `lg:flex-col lg:space-x-0 lg:space-y-14`
            )}
          >
            <li>
              <Link
                to="/rooms"
                className={classNames(`lg:text-2xl`, `xs:text-xl`)}
              >
                จองที่พัก
              </Link>
            </li>
            <li>
              <Link
                to="/#product"
                className={classNames(`lg:text-2xl`, `xs:text-xl`)}
              >
                สินค้าและบริการ
              </Link>
            </li>
            <li>
              <Link
                to="/#contact"
                className={classNames(`lg:text-2xl`, `xs:text-xl`)}
              >
                ติดต่อเรา
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
