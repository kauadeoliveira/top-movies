import { OverviewContainer } from "../styles/styles"

export const Overview = (props) =>{
    return(
    <OverviewContainer>
        <h1>Overview</h1>
        <p>{props.overview}</p>
    </OverviewContainer>
    )
}