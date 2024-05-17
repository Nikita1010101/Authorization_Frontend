import React, { FC } from 'react'

import styels from './RememberedPasswordLink.module.scss'
import { Link } from 'react-router-dom'

export const RememberedPasswordLink: FC = () => {
  return (
    <Link to={'login'}>Вспомнил пароль!</Link>
  )
}