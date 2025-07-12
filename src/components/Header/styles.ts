import styled from 'styled-components'
import bannerImage from '../../assets/banner.jpg'

type HeaderProps = {
  $isHome: boolean
}

export const HeaderBar = styled.header<HeaderProps>`
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  height: ${({ $isHome }) => ($isHome ? '360px' : '162px')};
  display: flex;
  align-items: center;
  justify-content: ${({ $isHome }) => ($isHome ? 'center' : 'space-between')};
  padding: 0 171px;
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
`

export const Logo = styled.img`
  width: 125px;
  margin: 0 241px 0 316px;
`

export const Nav = styled.div`
  color: #e66767;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin-left: 0;
  padding-left: 0;
  border-left: 0;
`

export const Cart = styled.div`
  color: #e66767;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin-left: 10px;
  margin-right: 100px;
  white-space: nowrap;
`

export const CenteredWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px; 
  padding-left: 32px;

`

export const CenteredText = styled.p`
  font-size: 36px;
  height: 84px;
  width: 539px;
  color: #e66767;
  text-align: center;
  font-weight: bold;
  margin: 0;
`
export const Containeri = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 97px;
`