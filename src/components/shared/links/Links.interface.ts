import { FC } from 'react'

export type LinkTypes = 'Authorization' | 'ForgotPassword' | 'RememberedPassword'

export type TypeLinksCompoundComponents = Record<LinkTypes, FC> 
