import { useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import {
    HeaderBar,
    Logo,
    Nav,
    Cart,
    CenteredWrapper,
    Containeri,
    CenteredText
} from './styles'
import Container from '../Container/styles'

const Header = () => {
    const location = useLocation()
    const isHome = location.pathname === '/'

    return (
        <HeaderBar $isHome={isHome}>
            {isHome ? (
                <CenteredWrapper>
                    <Containeri>
                    <Logo src={logo} alt="efood logo" $isHome={isHome} />
                    <CenteredText>
                        Viva experiências gastronômicas no conforto da sua casa
                    </CenteredText>
                    </Containeri>
                </CenteredWrapper>
            ) : (
                <>
                <Container>
                    <Nav>Restaurantes</Nav>
                    <Logo src={logo} alt="efood logo" />
                    <Cart>0 produto(s) no carrinho</Cart>
                </Container>
                </>
            )}
        </HeaderBar>
    )
}

export default Header