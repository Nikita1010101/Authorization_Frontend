import { FC } from 'react'
import { InputMask } from '@react-input/mask'

import { IInputs } from '../inputs.interface'

export const PhoneInput: FC<IInputs> = ({ register }) => {
  return (
    <div className=''>
      <InputMask
        placeholder='Enter your phone'
        mask='+$ (___) ___-__-__'
        replacement={{ _: /\d/, $: /7/ }}
        {...register('phone')}
      />
    </div>
  )
}
