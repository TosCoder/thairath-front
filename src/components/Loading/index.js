import React from 'react'
import { LoadingWrapperStyle, LoadingSpinStyle } from './style'

export const Loading = () => {
  return (
    <LoadingWrapperStyle>
      <LoadingSpinStyle tip="กรุณารอสักครู่..." size="large" />
    </LoadingWrapperStyle>
  )
}
