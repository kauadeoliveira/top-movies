import { ActorCard, CardLarge, CardSmall } from "../styles/styles"

export const Actor = (props) => {
    return(
        <>
            <CardSmall>
                <img src={`https://image.tmdb.org/t/p/w500${props.profile}`} alt="" />
                <div className="card-description-sm">
                    <strong>Name: {props.name}</strong>
                    <strong>Character: {props.character}</strong>
                    <strong>Popularity: {props.rating}</strong>
                </div>
            </CardSmall>

            <CardLarge>
                <div className="rating">{props.rating}</div>
                <img src={`https://image.tmdb.org/t/p/w500${props.profile}`} alt="" />

                <div className="card-description-lg">
                    <h1>{props.name}</h1>
                </div>
            </CardLarge>
        </>
    )
}