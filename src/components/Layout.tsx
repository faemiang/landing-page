import React, { FC } from 'react'
import Background from './Background'
import Header from './Header'
import Footer from './Footer'
import { motion } from 'framer-motion'

const Layout: FC = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ easings: 'linear', duration: 0.3 }}
    >
      <Background />
      <Header />
      <main>{children}</main>
      <Footer />
    </motion.div>
  )
}

export default Layout
