import React, { FC, useMemo } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { classNames } from '@/utils/styling'
import Button from '@/components/Base/Button'
import { IImage } from '@/types/assets'
import numeral from 'numeral'

interface IFeatureRoom {
  featured: boolean
  name: string
  description: string
  images: IImage[]
  slug: string
  price: number
}

const RoomsSection: FC = () => {
  const {
    roomsFile: { data: roomsData },
  }: {
    roomsFile: { data: IFeatureRoom[] }
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

  const rooms = useMemo(() => roomsData.filter((e) => e.featured), [roomsData])

  return (
    <section className="py-24 bg-white">
      <div className="container flex flex-col items-center">
        <h2 className={classNames('text-center')}>ห้องพักแนะนำ</h2>

        <div
          className={classNames(
            `grid grid-cols-2 gap-10 mt-12 px-20`,
            `lg:px-0 lg:gap-5`,
            `md:grid-cols-1 md:gap-10`
          )}
        >
          {rooms.map((room, idx) => (
            <div
              key={`feature-room-${idx}`}
              className="relative z-10 w-full group"
            >
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

        <Button to={'/'} className={classNames(`mt-12 text-2xl`, `lg:text-xl`)}>
          ดูเพิ่มเติม
        </Button>
      </div>
    </section>
  )
}

export default RoomsSection
