import { FC } from 'react'
import { Eye, EyeOff } from 'lucide-react'

import { IInputs } from '../inputs.interface'

export const PasswordInput: FC<IInputs> = ({ register }) => {
  return (
    <div>
      <input type='password' placeholder='Enter your password' {...register('password')} />
      <EyeOff />
    </div>
  )
}
