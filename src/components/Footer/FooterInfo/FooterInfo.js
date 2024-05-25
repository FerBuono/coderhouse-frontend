import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logos/logo.png'
import { 
    Container,
    Left,
    Title, 
    List, 
    ListItem, 
    Center, 
    Logo, 
    SocialContainer, 
    SocialIcon, 
    Right, 
    ContactItem, 
    Payment
} from './FooterInfoStyle';

const FooterInfo = () => {
    return (
        <Container>
            <Left>
                <Title>Explore</Title>
                <List>
                    <ListItem><Link to={'/'}>Home</Link></ListItem>
                    <ListItem><Link to={'/cart'}>Cart</Link></ListItem>
                    <ListItem><Link to={'/orders'}>My Orders</Link></ListItem>
                    <ListItem><Link to={'/authors'}>Top Authors</Link></ListItem>
                    <ListItem><Link to={'/categories'}>Top Categories</Link></ListItem>
                    <ListItem><Link to={'/'}>Most Popular Books</Link></ListItem>
                    <ListItem>Bestsellers</ListItem>
                    <ListItem>New Releases</ListItem>
                    <ListItem>FAQs</ListItem>
                    <ListItem>Contact Us</ListItem>
                    <ListItem>Help</ListItem>
                </List>
            </Left>
            <Center>
                <Logo>
                    <Link to={'/'}>
                        <img src={logo} style={{height:'100%'}} alt="logo"/>
                    </Link>
                </Logo>
                <SocialContainer>
                    <Link to={"facebook.com/Clasica-y-Moderna"}>
                        <SocialIcon color="#3b5999">
                            <Facebook />
                        </SocialIcon>
                    </Link>
                    <Link to={"instagram.com/Clasica-y-Moderna"}>
                        <SocialIcon color="#E80903">
                            <Instagram />
                        </SocialIcon>
                    </Link>
                    <Link to={"twitter.com/Clasica-y-Moderna"}>
                        <SocialIcon color="#55ADEC">
                            <Twitter />
                        </SocialIcon>
                    </Link>
                </SocialContainer>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/>
                    828 Broadway, New York, NY 10003, U.S.A.
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>
                    +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/>
                    contact@cym.com
                </ContactItem>
                <Payment src="https://aroaro.es/wp-content/uploads/2020/04/accepted-payment-methods.png" alt='payment methods'/>
            </Right>
        </Container>
    )
}

export default FooterInfo
