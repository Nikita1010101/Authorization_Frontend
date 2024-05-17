import { FC, PropsWithChildren } from 'react'

import styles from './Links.module.scss'
import { AuthorizationLink } from './authorization-link/AuthorizationLink'
import { TypeLinksCompoundComponents } from './Links.interface'
import { ForgotPasswordLink } from './forgot-password-link/ForgotPasswordLink'
import { RememberedPasswordLink } from './remembered-password-link/RememberedPasswordLink'

export const Links: FC<PropsWithChildren> & TypeLinksCompoundComponents = ({ children }) => {
  return <div className={styles.links}>{children}</div>
}

Links.Authorization = AuthorizationLink
Links.ForgotPassword = ForgotPasswordLink
Links.RememberedPassword = RememberedPasswordLink
