import { NavLink } from 'react-router-dom';
import { Container, Title, CardsContainer, Card, Img, Text } from './CardListContainerStyle';

const CardListContainer = ({title, list, name}) => {

    return (
        <Container>
            <Title>{title}</Title>
            <CardsContainer>
                {
                    list.map(item => (
                        <NavLink to={`/${name}/${item.name}`} style={{width:'31%', margin:'1rem 10px'}} key={item.name}>
                            <Card>
                                <Img src={item.img} alt='product image'/>
                                <Text>{item.name.toUpperCase()}</Text>
                            </Card>
                        </NavLink>
                    ))
                }
            </CardsContainer>
        </Container>
    )
}

export default CardListContainer
