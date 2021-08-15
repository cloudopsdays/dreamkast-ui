import React from 'react'
import Button from '@material-ui/core/Button'
import * as Styled from './styled'
import * as CommonStyled from '../../styles/styled'

type Props = {
  url: string
}

export const DesktopMenu: React.FC<Props> = ({ url }) => {
  return (
    <Styled.DesktopMenu>
      <CommonStyled.MenuLink href="/codt2021/ui#booths" rel="noreferrer">
        <Button style={{ color: '#037f8c' }}>Booths</Button>
      </CommonStyled.MenuLink>
      <Button href={url} style={{ color: '#037f8c' }}>
        Logout
      </Button>
    </Styled.DesktopMenu>
  )
}
