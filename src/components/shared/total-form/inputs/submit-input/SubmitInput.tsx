import React, { FC } from 'react'

export const SubmitInput: FC<{ title: string }> = ({ title }) => {
  return (
    <div>
      <input type='submit' value={title} />
    </div>
  )
}
