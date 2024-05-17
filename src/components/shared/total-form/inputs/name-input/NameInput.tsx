import { FC } from 'react'

import { IInputs } from '../inputs.interface'

export const NameInput: FC<IInputs> = ({ register }) => {
  return (
    <div className=''>
      <input type='text' placeholder='Enter your name' {...register('name')} />
    </div>
  )
}
