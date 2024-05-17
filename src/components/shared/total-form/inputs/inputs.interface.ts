import { UseFormRegister } from 'react-hook-form'

import { IForm } from '../../../../ types/form.type'

export interface IInputs {
  register: UseFormRegister<IForm>
}
