import { FC } from 'react'

import styles from './Home.module.scss'
import { Links } from '../../../shared/links/Links'
import { TotalForm } from '../../../shared/total-form/TotalForm'
import { useForm } from 'react-hook-form'
import { IForm } from '../../../../ types/form.type'

export const Home: FC = () => {
  const { handleSubmit, register } = useForm<IForm>()
  
  const onSubmit = (data: IForm) => {
    console.log(data)
  }

  return (
    <div>
      <TotalForm handleSubmit={handleSubmit} onSubmitFn={onSubmit}>
        <TotalForm.Code register={register} />
        <TotalForm.Name register={register} />
        <TotalForm.Submit title='Вход' />
        <Links>
          <Links.Authorization />
          <Links.ForgotPassword />
          <Links.RememberedPassword />
        </Links>
      </TotalForm>
    </div>
  )
}
