import { FC } from 'react'
import { UseFormHandleSubmit } from 'react-hook-form'

import { IForm } from '../../../ types/form.type'
import { IInputs } from './inputs/inputs.interface'

export interface ITotalForm {
  handleSubmit: UseFormHandleSubmit<IForm>
  onSubmitFn: (data: IForm) => void
}

export type InputTypes = 'Code' | 'Name' | 'Password' | 'Phone'

export type TypeTotalFormCompoundComponents = Record<InputTypes, FC<IInputs>> & {
  Submit: FC<{ title: string }>
}
