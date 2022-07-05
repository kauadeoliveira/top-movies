import { HeaderContainer } from "../styles/styles"
import { Link } from "react-router-dom"

export const Header = (props) => {
    if(props.title != null){
        return(
            <HeaderContainer>
                <h1>{props.title}</h1>
            </HeaderContainer>
        )
    }
    else{
        return(
            <HeaderContainer>
                <Link to={'/'}>
                    Home
                </Link>
            </HeaderContainer>
        )
    }
}