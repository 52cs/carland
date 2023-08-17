'use client'

import Image from 'next/image'
import { useSearchContext } from '../context/search'
import Search from './Search'

import { motion, easeInOut } from 'framer-motion'

import { fadeIn } from '/variants'

export default function Hero() {
  const { searchActive } = useSearchContext()
  return (
    <section className='h-screen xl:h-[90vh] bg-[#b2b7c2]/10' id='home'>
      <div className='container mx-auto h-full xl:pt-10'>
        {/* text & img wrapper */}
        <div className='flex flex-col xl:flex-row justify-center items-center
          xl:justify-start h-full'>
          {/* text */}
          <div className='text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0'>
            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className='h1'
            >
              Explore the Finest <span className='text-accent'>Global</span>{' '}
              Offers
            </motion.h1>
            <motion.p
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className='description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10'
            >
              Find your ideal ride for any adventure with our diverse range of
              afforable and dependable car rentals.
            </motion.p>
            {/* btns */}
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className='flex gap-x-3 justify-center xl:justify-start'
            >
              <button>
                <Image
                  src={'/icons/appstore-btn.svg'}
                  width={132}
                  height={36}
                  alt=''
                />
              </button>
              <button>
                <Image
                  src={'/icons/playstore-btn.svg'}
                  width={132}
                  height={36}
                  alt=''
                />
              </button>
            </motion.div>
          </div>
          {/* img car */}
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className='relative w-full h-full max-h-[50vh] md:max-w-[70vw]
              xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[100px]
              min-[1680px]:right-[120px] xl:top-38'
          >
            <Image
              src={'/images/hero/car.svg'}
              fill
              alt=''
              style={{ objectFit: 'contain' }}
              priority
            />
          </motion.div>
        </div>
      </div>
      {searchActive ? (
        <div
          className='fixed top-[80px] z-10 w-full max-w-[1920px]'
        >
          <Search />
        </div>
      ) : (
        <motion.div
          variants={fadeIn('up', 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className='-mt-12 w-full max-w-[1300px] mx-auto'
        >
          <Search />
        </motion.div>
      )}
    </section>
  )
}
