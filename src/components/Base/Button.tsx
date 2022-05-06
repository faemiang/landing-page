import { classNames } from '@/utils/styling'
import { Link } from 'gatsby'
import React, { FC } from 'react'

import * as styles from '@/styles/modules/base/button.module.scss'

interface IProps {
  to: string
  className?: string
}

const Button: FC<IProps> = ({ to, children, className }) => {
  return (
    <Link to={to} className={classNames(styles.button, className || '')}>
      {children}
    </Link>
  )
}

export default Button
