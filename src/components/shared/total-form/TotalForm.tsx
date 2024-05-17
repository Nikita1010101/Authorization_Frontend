import { FC, PropsWithChildren } from 'react'

import styles from './TotalForm.module.scss'
import { ITotalForm, TypeTotalFormCompoundComponents } from './TotalForm.interface'
import { CodeInput } from './inputs/code-input/CodeInput'
import { PasswordInput } from './inputs/password-input/PasswordInput'
import { PhoneInput } from './inputs/phone-input/PhoneInput'
import { NameInput } from './inputs/name-input/NameInput'
import { SubmitInput } from './inputs/submit-input/SubmitInput'

export const TotalForm: FC<PropsWithChildren<ITotalForm>> & TypeTotalFormCompoundComponents = ({
  children,
  handleSubmit,
  onSubmitFn,
}) => {
  return <form onSubmit={handleSubmit(onSubmitFn)}>{children}</form>
}

TotalForm.Code = CodeInput
TotalForm.Name = NameInput
TotalForm.Password = PasswordInput
TotalForm.Phone = PhoneInput
TotalForm.Submit = SubmitInput