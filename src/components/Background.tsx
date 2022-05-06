import { classNames } from '@/utils/styling'
import { StaticImage } from 'gatsby-plugin-image'
import React, { FC } from 'react'

const Background: FC = () => {
  return (
    <div
      className={classNames(
        `fixed top-0 left-0 w-full h-full z-[-1] opacity-60`
      )}
    >
      <StaticImage
        src="../images/bg.jpg"
        alt="Sky blue"
        quality={70}
        objectFit="cover"
        objectPosition="top"
        className="w-full h-full"
      />
    </div>
  )
}

export default Background
