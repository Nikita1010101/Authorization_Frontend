import React, { FC } from 'react'

import styles from './AuthorizationLink.module.scss'
import { Link } from 'react-router-dom'

export const AuthorizationLink: FC = () => {
  return <Link to={'authorization'}>Авторизация</Link>
}
