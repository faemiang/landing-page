import React, { FC, Fragment, useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '@/components/Layout'
import SEO from '@/components/Seo'
import { classNames } from '@/utils/styling'
import { IImage } from '@/types/assets'
import { GatsbyImage } from 'gatsby-plugin-image'
import numeral from 'numeral'
import ImagesModal from '@/components/Template/Room/ImagesModal'

interface IPageContext {
  capacity: number
  description: string
  extras: string[]
  featured: boolean
  name: string
  rules: string[]
  price: number
  discountPrice: number
  slug: string
  type: 'single' | 'double' | 'family' | 'presidential'
  images: IImage[]
}

interface INode {
  node: {
    id: string
    pageContext: IPageContext
  }
}

interface IPageQuery {
  data: {
    allSitePage: {
      edges: INode[]
    }
  }
}

const LIMIT_SHOW_IMAGE = 5

const RoomTemplate: FC<IPageQuery> = ({ data }) => {
  const { name, description, images, slug, price, capacity, extras, rules } =
    data.allSitePage.edges[0].node.pageContext

  const [isOpenImagesModal, setIsOpenImagesModal] = useState<boolean>(false)

  return (
    <Fragment>
      <SEO
        title={name}
        description={description}
        pathname={`/rooms/${slug}`}
        image={{
          src: images[0].url.childImageSharp.gatsbyImageData.images.fallback
            ?.src!,
          width: images[0].url.childImageSharp.gatsbyImageData.width,
          height: images[0].url.childImageSharp.gatsbyImageData.height,
        }}
      />
      <Layout>
        <section className="py-12 bg-white">
          <div className={classNames(`container`)}>
            <h1 className={classNames(`text-3xl`, `md:text-2xl`)}>{name}</h1>

            <div className={classNames(`mt-5 relative`)}>
              <div
                className={classNames(
                  `grid grid-cols-4 gap-3 rounded-xl overflow-hidden`,
                  `lg:gap-2 `,
                  `md:grid-cols-2`
                )}
              >
                {images.length > 0 && (
                  <Fragment>
                    <div
                      className={classNames(
                        images.length === 1
                          ? `col-span-4 row-span-2`
                          : `col-span-2 row-span-2`,
                        `md:aspect-video`
                      )}
                    >
                      {images.length === 1 ? (
                        <GatsbyImage
                          key={`image-${slug}-0`}
                          image={images[0].url.childImageSharp.gatsbyImageData}
                          alt={images[0].alt}
                          objectFit="contain"
                          objectPosition="center"
                          className={classNames(`w-full h-full bg-sky-50`)}
                        />
                      ) : (
                        <GatsbyImage
                          key={`image-${slug}-0`}
                          image={images[0].url.childImageSharp.gatsbyImageData}
                          alt={images[0].alt}
                          objectPosition="center"
                          className={classNames(`w-full h-full`)}
                        />
                      )}
                    </div>

                    {images.length > 1 &&
                      images.map((img, imgIdx) => {
                        if (imgIdx === 0 || imgIdx > LIMIT_SHOW_IMAGE - 1)
                          return
                        return (
                          <GatsbyImage
                            key={`image-${slug}-${imgIdx}`}
                            image={img.url.childImageSharp.gatsbyImageData}
                            alt={img.alt}
                            objectPosition="bottom"
                            className={classNames(
                              `w-full aspect-4/3 md:aspect-video`,
                              images.length === 2
                                ? `col-span-2 row-span-2`
                                : ``,
                              images.length === 3
                                ? `col-span-1 row-span-2 h-full`
                                : ``,
                              images.length === 4 ? `col-span-1 row-span-1` : ``
                            )}
                          />
                        )
                      })}
                  </Fragment>
                )}
              </div>

              {images.length > LIMIT_SHOW_IMAGE && (
                <button
                  className={classNames(
                    `absolute right-3 bottom-3 z-20 bg-white rounded-md py-2 px-5 border`,
                    `transition hover:opacity-80 shadow-lg`
                  )}
                  onClick={() => setIsOpenImagesModal(true)}
                >
                  <span className={classNames(`font-sriracha`)}>
                    แสดงรูปทั้งหมด
                  </span>
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="pb-12 bg-white border-b border-primary border-opacity-10">
          <div className={classNames(`container`)}>
            <div
              className={classNames(
                `grid grid-cols-12 gap-10`,
                `md:grid-cols-1`
              )}
            >
              <div className={classNames(`col-span-7`, `md:col-span-full`)}>
                <h3 className="text-2xl">รายละเอียด</h3>
                <p
                  className="mt-3"
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                ></p>
              </div>

              <div
                className={classNames(
                  `col-span-5 divide-y divide-primary divide-opacity-10`,
                  `md:col-span-full`
                )}
              >
                <div
                  className={classNames(
                    `pb-5`,
                    `md:pt-5 md:border-t md:border-primary md:border-opacity-10`
                  )}
                >
                  <h3 className="text-2xl">ข้อมูล</h3>
                  <ul className="mt-3 space-y-2 list-disc ml-5">
                    <li>
                      <span className="md:text-[0.875rem] leading-6">
                        ฿{numeral(price).format('0,0')} / คืน
                      </span>
                    </li>
                    <li>
                      <span className="md:text-[0.875rem] leading-6">
                        พักได้ห้องละ {capacity} ท่าน
                      </span>
                    </li>
                  </ul>
                </div>

                {extras.length > 0 && (
                  <div className="py-5">
                    <h3 className="text-2xl">ที่พักนี้มีอะไรบ้าง</h3>
                    <ul className="mt-3 space-y-2 list-disc ml-5">
                      {extras.map((extra, extraIdx) => (
                        <li key={`extra-${extraIdx}`}>
                          <span className="md:text-[0.875rem] leading-6">
                            {extra}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {rules.length > 0 && (
                  <div className="py-5">
                    <h3 className="text-2xl">กฎของที่พัก</h3>
                    <ul className="mt-3 space-y-2 list-disc ml-5">
                      {rules.map((rule, ruleIdx) => (
                        <li key={`rule-${ruleIdx}`}>
                          <span className="md:text-[0.875rem] leading-6">
                            {rule}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </Layout>

      <ImagesModal
        isOpen={isOpenImagesModal}
        images={images}
        onClose={() => setIsOpenImagesModal(false)}
      />
    </Fragment>
  )
}

export default RoomTemplate

export const query = graphql`
  query ($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          id
          pageContext
        }
      }
    }
  }
`
