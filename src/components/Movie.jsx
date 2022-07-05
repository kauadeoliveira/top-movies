import { useEffect, useState } from "react";
import { APIKey } from "../config/key";
import { useParams } from 'react-router-dom';
import { CardLarge, CardSmall } from "../styles/styles";
import { BsFillStarFill } from "react-icons/bs"; 


const Movie = (props) => {
    const{ id } = useParams()
    
    const[genres, setGenres] = useState([])

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${props.movieId}?api_key=${APIKey}&language=en-US`)
        .then(response => response.json())
        .then(movie => {setGenres(movie.genres)})
    })
    return ( 
    <>
        <CardSmall> 
            <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt="" />
            <div className="card-description-sm">
            <strong>{props.date}</strong>
            <h1>{props.title}</h1>
            <div className="rating">
                <span>{props.rating}</span>
                <BsFillStarFill />
            </div>
            <div className="genres-container">
                {genres.map(genres => {
                    return(
                        <strong className="genres-strong" key={genres.id}>{genres.name}</strong>
                    )
                })}
            </div>



            </div>
        </CardSmall>

        <CardLarge>
            <div className="rating">{props.rating}</div>
            <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt="" />

            <div className="card-description-lg">
                <h1>{props.title}</h1>
                
                <div className="genres-container">
                    {genres.map(genres => {
                        return(
                            <strong className="genres-strong" key={genres.id}>{genres.name}</strong>
                        )
                    })}
                </div>
            </div>
        </CardLarge>
    </>
     );
}

export default Movie
 
