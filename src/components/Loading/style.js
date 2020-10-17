import styled from 'styled-components'
import { Spin } from 'antd'

export const LoadingWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`
export const LoadingSpinStyle = styled(Spin)`
  && {
    & .ant-spin-dot-item {
      background-color: rgb(1, 180, 0);
    }
    color: rgb(1, 180, 0);
    font-size: 1.5em;
  }
`
