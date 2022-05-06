import React, { Fragment } from 'react'
import Layout from '@/components/Layout'
import RoomsSection from '@/components/Pages/Home/RoomsSection'
import { StaticImage } from 'gatsby-plugin-image'
import { classNames } from '@/utils/styling'
import Button from '@/components/Base/Button'
import SEO from '@/components/Seo'

const IndexPage = () => {
  return (
    <Fragment>
      <SEO />
      <Layout>
        <section>
          <div className="container container-xl">
            <div
              className={classNames(
                `relative rounded-[20px] overflow-hidden`,
                `lg:h-[400px]`,
                `xs:h-auto xs:aspect-4/3`
              )}
            >
              <StaticImage
                src="../images/pages/home/hero.jpg"
                alt="Fae-Miang Café Front Store"
                objectFit="cover"
                objectPosition="center"
                className={classNames(`lg:h-full`)}
              />
              <div
                className={classNames(
                  `bg-gradient-to-b from-[rgba(10,60,110,0.3)] to-[rgba(10,60,110,0.9)]`,
                  `absolute inset-0 flex flex-col items-center justify-center text-center px-2`
                )}
              >
                <h1 className="text-white drop-shadow-[0px_4px_4px_rgba(10,60,110,0.5)]">
                  Fae-Miang Café
                </h1>
                <h3 className="text-white drop-shadow-[0px_4px_4px_rgba(10,60,110,0.5)] mt-3">
                  บริการห้องพัก อาหาร กาแฟ บรรยากาศล้อมรอบด้วยภูเขา
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className={classNames(`pt-36 pb-32`, `lg:pt-20 lg:pb-10`)}>
          <div className="container">
            <h2 className={classNames(`lg:text-center`)}>
              ห้องพักหลังเดี่ยววิลล่าส่วนตัว
            </h2>

            <div className="grid grid-cols-12 gap-5">
              <div
                className={classNames(
                  `bg-white bg-opacity-80 py-24 px-16 mt-8 col-start-1 row-start-1 col-span-9`,
                  `lg:py-20 lg:px-12 lg:col-span-full`,
                  `xs:py-10 xs:px-4`
                )}
              >
                <p
                  className={classNames(
                    `max-w-[420px]`,
                    `lg:max-w-full lg:text-center`
                  )}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>

                <div
                  className={classNames(`mt-10`, `lg:flex lg:justify-center`)}
                >
                  <Button to={'/'}>ดูเพิ่มเติม</Button>
                </div>
              </div>

              <div
                className={classNames(
                  `relative`,
                  `row-start-1 col-start-6 col-span-full`,
                  `lg:row-start-2 lg:col-start-1 lg:col-span-full lg:items-center lg:justify-center lg:flex`
                )}
              >
                <StaticImage
                  src="../images/pages/home/private-villa-3.jpg"
                  alt="Private villa image 3"
                  objectFit="cover"
                  objectPosition="center"
                  className={classNames(
                    `rounded-[10px] overflow-hidden`,
                    `w-[258px] h-[169px] !absolute top-[-4.5rem] right-[-0.5rem]`,
                    `lg:z-10 lg:w-[220px] lg:h-[130px]`,
                    `xs:top-0 xs:w-[140px] lg:h-[90px]`
                  )}
                  style={{
                    filter: `drop-shadow(-15px 15px 40px rgba(10, 60, 110, 0.3))`,
                  }}
                />
                <StaticImage
                  src="../images/pages/home/private-villa-1.jpg"
                  alt="Private villa image 1"
                  objectFit="cover"
                  objectPosition="center"
                  className={classNames(
                    `rounded-[10px] overflow-hidden`,
                    `w-[663px] h-[414.38px] !absolute top-[3.5rem] left-[5rem]`,
                    `xl:w-[80%]`,
                    `lg:!relative lg:top-[-2rem] lg:left-0 lg:mx-auto lg:z-0`,
                    `sm:w-full sm:left-0 sm:top-[-3rem]`,
                    `xs:top-[2rem] xs:h-auto`
                  )}
                  style={{
                    filter: `drop-shadow(15px 15px 40px rgba(10, 60, 110, 0.3))`,
                  }}
                />

                <StaticImage
                  src="../images/pages/home/private-villa-2.jpg"
                  alt="Private villa image 2"
                  objectFit="cover"
                  objectPosition="center"
                  className={classNames(
                    `rounded-[10px] overflow-hidden`,
                    `w-[146px] h-[263px] !absolute bottom-[-5rem] left-0`,
                    `lg:bottom-[1rem] lg:w-[120px] lg:h-[200px]`,
                    `xs:bottom-[-4rem] xs:left-[-8px] xs:w-[5rem] xs:h-[8rem]`
                  )}
                  style={{
                    filter: `drop-shadow(15px 15px 40px rgba(10, 60, 110, 0.3))`,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={classNames(`pb-36 pt-32`, `lg:pt-15`)}>
          <div className="container">
            <h2 className="text-right lg:text-center">ห้องพักแบบโฮมสเตย์</h2>

            <div className="grid grid-cols-12 gap-5">
              <div
                className={classNames(
                  `relative`,
                  `row-start-1 col-start-1 col-span-7`,
                  `lg:col-start-1 lg:col-span-full lg:row-span-2 lg:items-center lg:justify-center lg:flex`
                )}
              >
                <StaticImage
                  src="../images/pages/home/homestay-3.jpg"
                  alt="Homestay image 3"
                  objectFit="cover"
                  objectPosition="center"
                  className={classNames(
                    `rounded-[10px] overflow-hidden`,
                    `w-[258px] h-[169px] !absolute top-[-6rem] left-[-0.5rem]`,
                    `lg:w-[220px] lg:h-[130px] lg:z-10 lg:top-[-3rem]`,
                    `xs:top-0 xs:w-[140px] lg:h-[90px]`
                  )}
                  style={{
                    filter: `drop-shadow(-15px 15px 40px rgba(10, 60, 110, 0.3))`,
                  }}
                />
                <StaticImage
                  src="../images/pages/home/homestay-1.jpg"
                  alt="Homestay image 1"
                  objectFit="cover"
                  objectPosition="center"
                  className={classNames(
                    `rounded-[10px] overflow-hidden`,
                    `w-[663px] h-[414.38px] !absolute top-[3.5rem] right-[5rem]`,
                    `xl:w-[80%]`,
                    `lg:!relative lg:top-[-2rem] lg:right-0 lg:z-0`,
                    `sm:w-full sm:left-0 sm:top-[-3rem]`,
                    `xs:top-[2rem] xs:h-auto`
                  )}
                  style={{
                    filter: `drop-shadow(15px 15px 40px rgba(10, 60, 110, 0.3))`,
                  }}
                />

                <StaticImage
                  src="../images/pages/home/homestay-2.jpg"
                  alt="Homestay image 2"
                  objectFit="cover"
                  objectPosition="right"
                  className={classNames(
                    `rounded-[10px] overflow-hidden`,
                    `w-[263px] h-[263px] !absolute bottom-[-5rem] right-0`,
                    `lg:w-[230px] lg:h-[230px] lg:bottom-[-3rem]`,
                    `xs:bottom-[-4rem] xs:right-[-8px] xs:w-[8rem] xs:h-[8rem]`
                  )}
                  style={{
                    filter: `drop-shadow(15px 15px 40px rgba(10, 60, 110, 0.3))`,
                  }}
                />
              </div>

              <div
                className={classNames(
                  `flex flex-col items-end`,
                  `bg-white bg-opacity-80 py-24 px-16 mt-8 col-start-4 row-start-1 col-span-9`,
                  `lg:py-20 lg:px-12 lg:col-span-full lg:items-center`,
                  `xs:py-10 xs:px-4`
                )}
              >
                <p
                  className={classNames(
                    `max-w-[420px] text-right`,
                    `lg:max-w-full lg:text-center`
                  )}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>

                <div
                  className={classNames(
                    `mt-10 mr-8`,
                    `lg:flex lg:justify-center`
                  )}
                >
                  <Button to={'/'}>ดูเพิ่มเติม</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <RoomsSection />

        <section
          id="product"
          className={classNames(`pb-64 pt-32`, `lg:pt-28 lg:pb-40`, `md:pb-20`)}
        >
          <div className="container">
            <h2 className={classNames(`xs:text-center`)}>
              สินค้า ส่งเสริมผลิตภัณฑ์ชุมชน
            </h2>

            <div
              className={classNames(`mt-10`, `flex flex-wrap`, `md:flex-col`)}
            >
              <div className={classNames(`relative`, `lg:flex-1`)}>
                <StaticImage
                  src="../images/pages/home/product-1.jpg"
                  alt="Fae-Miang Café Product 01"
                  objectFit="cover"
                  objectPosition="center"
                  className={classNames(
                    `rounded-[10px] overflow-hidden`,
                    `w-[457px] h-[610px] z-10`,
                    `lg:w-full`,
                    `md:w-[80%] md:h-auto md:aspect-square md:mt-[3rem]`,
                    `xs:w-[90%]`
                  )}
                  style={{
                    filter: `drop-shadow(-15px 15px 40px rgba(10, 60, 110, 0.3))`,
                  }}
                />
                <div
                  className={classNames(
                    `after:absolute after:w-full after:h-full after:bg-primary after:bg-opacity-80 after:left-[-1.5rem] after:top-[-1.5rem] after:z-0 after:rounded-[10px]`,
                    `w-[380px] h-[291.74px] absolute top-[440px] left-[340px] z-20`,
                    `xl:top-[480px]`,
                    `lg:h-[240px] lg:left-[4rem]`,
                    `md:top-[-1rem] md:left-auto md:right-0 md:after:hidden md:h-auto md:w-[60%] aspect-5/3`,
                    `xs:aspect-4/3 xs:top-0`
                  )}
                >
                  <StaticImage
                    src="../images/pages/home/product-2.jpg"
                    alt="Fae-Miang Café Product 02"
                    objectFit="cover"
                    objectPosition="center"
                    className={classNames(
                      `rounded-[10px] overflow-hidden w-full h-full z-10`
                    )}
                    style={{
                      filter: `drop-shadow(15px 15px 40px rgba(10, 60, 110, 0.5))`,
                    }}
                  />
                </div>
              </div>
              <div
                className={classNames(
                  `py-12`,
                  `flex-1`,
                  `lg:py-8`,
                  `md:relative md:z-20 md:flex md:justify-end md:mt-[-3rem]`,
                  `xs:mt-[-5rem]`
                )}
              >
                <div
                  className={classNames(
                    `bg-white bg-opacity-80 p-16 h-full`,
                    `lg:p-8`,
                    `md:w-[85%]`,
                    `xs:w-[95%] xs:px-5 xs:py-6`
                  )}
                >
                  <h3>Arabica coffee beans, roasted from Doi Thepsadet</h3>
                  <p className="mt-2">
                    จากชุมชนดอยเทพเสด็จ คัดสรรสายพันธุ์ที่ดี
                    ตั้งแต่การปลูกจนถึงการคั่ว จนได้รสชาติแบบของ “แฟ-เมี่ยง”
                    มีสามรสชาติ กลาง-เข้ม-เข้มมาก
                    พร้อมให้จำหน่ายกลับบ้านและบริการส่ง ที่ “แฟ-เมี่ยงคาเฟ่”
                  </p>
                  <p className="mt-2">
                    แบบถุงซิปล็อก น้ำหนัก 200 กรัม
                    <br />
                    🏅กาแฟคั่วกลางและเข้ม ถุงละ 100 บาท
                    <br />
                    🏅กาแฟคั่วเข้มมาก ถุงละ 150 บาท
                    <br />
                    ค่าส่งเริ่มต้น 50 บาท ซื้อ 6 ถุงขึ้นไป *ส่งฟรี*
                    บริการบดให้ฟรี
                    <br />
                    ☎️ 061-284-2882
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Fragment>
  )
}

export default IndexPage
