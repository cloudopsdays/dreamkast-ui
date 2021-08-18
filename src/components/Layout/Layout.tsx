import React, { ReactNode, useEffect, useState } from 'react'
import * as Styled from './styled'
import Head from 'next/head'
import { DesktopMenu, MobileMenu } from '../Menu'
import AppBar from '@material-ui/core/AppBar'

type Props = {
  children?: ReactNode
  title?: string
}

export const Layout: React.FC<Props> = ({
  children,
  title = 'This is the default title',
}) => {
  const [url, setUrl] = useState<string>('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.origin + '/logout')
    }
  }, [])

  return (
    <Styled.Container>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/codt2021/ui/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <AppBar position="static">
          <Styled.Header>
            <a href="/codt2021/ui" rel="noopener noreferrer">
              <Styled.HeaderImg src="/codt2021/ui/images/codt2021_horizontal.png" />
            </a>
            <DesktopMenu url={url} />
          </Styled.Header>
          <MobileMenu url={url} />
        </AppBar>
      </header>
      <Styled.ChildrenContainer>{children}</Styled.ChildrenContainer>
      <Styled.Footer>
        <Styled.FooterLink
          href="https://cloudopsdays.com/privacy-policy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          プライバシーポリシー
        </Styled.FooterLink>
        <Styled.FooterLink
          href="https://cloudopsdays.com/conduct/"
          target="_blank"
          rel="noopener noreferrer"
        >
          行動規範
        </Styled.FooterLink>
        <Styled.FooterText>© Cloud Operator Days Tokyo 2021</Styled.FooterText>
      </Styled.Footer>
    </Styled.Container>
  )
}
