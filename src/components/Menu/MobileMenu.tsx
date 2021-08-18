import React from 'react'
import Button from '@material-ui/core/Button'
import * as Styled from './styled'
import * as CommonStyled from '../../styles/styled'

type Props = {
  url: string
}

export const MobileMenu: React.FC<Props> = ({ url }) => {
  return (
    <Styled.MobileMenu>
      <CommonStyled.MenuLink href="/codt2021/timetables" rel="noreferrer">
        <Button style={{ color: '#037f8c' }}>オンデマンドセッション</Button>
      </CommonStyled.MenuLink>
      <CommonStyled.MenuLink href="/codt2021/ui#booths" rel="noreferrer">
        <Button style={{ color: '#037f8c' }}>ブース</Button>
      </CommonStyled.MenuLink>
      <Button href={url} style={{ color: '#037f8c' }}>
        ログアウト
      </Button>
    </Styled.MobileMenu>
  )
}
