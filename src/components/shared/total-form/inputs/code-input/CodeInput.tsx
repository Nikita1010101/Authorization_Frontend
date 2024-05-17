import { FC } from 'react'

import { IInputs } from '../inputs.interface'

export const CodeInput: FC<IInputs> = ({ register }) => {
  return (
    <div className=''>
      <input type='text' placeholder='Enter sms code' {...register('code')} />
    </div>
  )
}
