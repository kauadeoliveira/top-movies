import { AboutContainer, ButtonContainer } from "../styles/styles";
import { Link, useParams } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs"; 

export const About = (props) => {
    console.log(props)

    const{ id } = useParams()


    function toHours(minutes){
        let hours = Math.floor(minutes/60)
        let min = minutes % 60;
        const strHours = (`00${hours}`).slice(-2)
        const strMinutes = (`00${min}`).slice(-2)
        return `${strHours}h ${strMinutes}min`
    }
    return(

        <AboutContainer>
            <h2>About: {props.title}</h2>

            <li>
                <strong>Runtime:</strong> <span>{toHours(props.runtime)}</span>
            </li>

            <li>
                <strong>Production Companies:</strong> {props.production_companies.map((companie) => {
                    return(
                        <a href={`https://en.wikipedia.org/wiki/${companie.name}`} target="_blank">
                            {companie.name}
                        </a>
                    )})}
            </li>

            <li>
                <strong>Genres: </strong>{props.genres.map(genre =>{
                    return(<ButtonContainer href='#' target='_blank' className='custom-buttons'>{genre.name}</ButtonContainer>) 
                } )}
            </li>
            
            <li>
                <strong>Rating: </strong><span>{props.rating}</span> <BsFillStarFill />
            </li>

            <li>
                <strong>Release Date: </strong> <span>{props.release_date}</span>                    
            </li>

            <li>
                <strong>Cast:</strong> {props.cast.map(actor => {
                    if(actor.order < 5){
                        return(
                            <a href={`https://en.wikipedia.org/wiki/${actor.name}`} target='_blank'>{actor.name}</a>
                        )
                    }
                })}
                <Link to={`/details/${id}/elenco`}>See more</Link>
            </li>

        </AboutContainer>
    )
}