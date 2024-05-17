import React, { FC } from 'react'

import styles from './ForgotPasswordLink.module.scss'
import { Link } from 'react-router-dom'

export const ForgotPasswordLink: FC = () => {
  return <Link to={'forgot-password'}>Забыл пароль</Link>
}
