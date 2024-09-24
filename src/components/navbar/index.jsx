import { Container, Profile } from "./styles";
import MenuButton from "../../../public/menu.svg"
import ProfileImg from "../../../public/profile.svg"

const Navbar = () => {
    return(
        <Container>
            <img src={MenuButton} alt=""/>
            <Profile src={ProfileImg} alt=""/>
        </Container>
    )
}

export default Navbar;