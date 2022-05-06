import React, { FC, Fragment, useEffect } from 'react'
import { IImage } from '@/types/assets'
import { motion, AnimatePresence } from 'framer-motion'
import { classNames } from '@/utils/styling'
import { GatsbyImage } from 'gatsby-plugin-image'

interface IProps {
  images: IImage[]
  isOpen?: boolean
  onClose?: () => void
}

const ImagesModal: FC<IProps> = ({ isOpen = false, onClose, images }) => {
  // _Effect
  useEffect(() => {
    if (isOpen) {
      document.body.style.position = `fixed`
      document.body.style.overflow = `hidden`
      document.body.style.inset = `0px`
      document.body.style.insetInlineEnd = `0px`
    } else {
      document.body.style.removeProperty('position')
      document.body.style.removeProperty('overflow')
      document.body.style.removeProperty('inset')
      document.body.style.removeProperty('inset-inline-end')
    }
  }, [isOpen])

  return (
    <Fragment>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ easings: 'easeOut', duration: 0.3 }}
            className={classNames(`fixed inset-0 bg-white z-50 pt-5`)}
          >
            <div className={classNames(`container flex flex-col h-full`)}>
              <button
                className={classNames(
                  `text-primary w-[2rem] h-[2rem] flex items-center justify-center ml-auto`
                )}
                onClick={onClose}
              >
                <i className="gg-close"></i>
              </button>

              <div
                className={classNames(
                  `flex-1 flex flex-wrap justify-center overflow-x-hidden py-5`,
                  `w-[66.66%] mx-auto space-y-[1.5%] space-x-[1.5%]`,
                  `lg:w-[85%]`,
                  `xs:w-[100%] xs:space-y-[4%] xs:space-x-[4%] xs:ml-[-2%]`
                )}
              >
                {images.length > 1 &&
                  images.map((img, imgIdx) => {
                    return (
                      <GatsbyImage
                        key={`image-modal-${imgIdx}`}
                        image={img.url.childImageSharp.gatsbyImageData}
                        alt={img.alt}
                        objectPosition="bottom"
                        className={classNames(
                          imgIdx === 0 ? `ml-[1.5%] xs:ml-[4%]` : ``,
                          imgIdx % 3 === 0
                            ? `w-full aspect-5/3`
                            : `w-[48.5%] xs:w-[46%]`
                        )}
                      />
                    )
                  })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  )
}

export default ImagesModal
