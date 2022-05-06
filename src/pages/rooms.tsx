import React, { Fragment } from 'react'
import Layout from '@/components/Layout'
import SEO from '@/components/Seo'
import { classNames } from '@/utils/styling'
import { IImage } from '@/types/assets'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import numeral from 'numeral'

interface IRoom {
  featured: boolean
  name: string
  description: string
  images: IImage[]
  slug: string
  price: number
}

const RoomsPage = () => {
  const {
    roomsFile: { data: roomsData },
  }: {
    roomsFile: { data: IRoom[] }
  } = useStaticQuery(graphql`
    {
      roomsFile: file(name: { eq: "rooms" }, extension: { eq: "json" }) {
        data: childrenRoomsJson {
          featured
          slug
          name
          description
          price
          images {
            url {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 533)
              }
            }
            alt
          }
        }
      }
    }
  `)

  return (
    <Fragment>
      <SEO />
      <Layout>
        <section className={classNames(`min-h-[70vh]`)}>
          <div className={classNames(`container`)}>
            <div
              className={classNames(
                `bg-white bg-opacity-0 p-7 text-center`,
                `xs:pt-10`
              )}
            >
              <h1 className={classNames(`text-5xl`, `xs:text-4xl`)}>
                ค้นหาห้องพัก
              </h1>
            </div>
            <div
              className={classNames(
                `grid grid-cols-4 gap-5 pt-10 pb-20`,
                `xl:grid-cols-3`,
                `md:grid-cols-2 md:gap-x-4`,
                `xs:grid-cols-1 xs:pt-0`
              )}
            >
              {roomsData.map((room, idx) => (
                <div key={`room-${idx}`} className="relative z-10 w-full group">
                  <Link
                    to={`/rooms/${room.slug}`}
                    className="absolute inset-0 z-10"
                  />
                  <GatsbyImage
                    image={room.images[0].url.childImageSharp.gatsbyImageData}
                    alt={room.images[0].alt}
                    objectPosition="bottom"
                    className="w-full rounded-lg"
                  />
                  <div className="mt-1 flex items-center">
                    <div className="truncate flex-1">
                      <span className="font-semibold text-lg">{room.name}</span>
                    </div>
                    <div className="ml-2">
                      <span className="text-lg text-gray-700">
                        ฿{numeral(room.price).format('0,0')} / คืน
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </Fragment>
  )
}

export default RoomsPage
