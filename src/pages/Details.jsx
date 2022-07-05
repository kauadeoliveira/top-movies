import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { APIKey } from '../config/key'
import { ButtonContainer, DetailsContainer } from '../styles/styles'
import { Link } from 'react-router-dom'
import '../styles/geral.css'
import { Header } from '../components/Header'
import { Video } from '../components/Video'
import { About } from '../components/About'
import { Overview } from '../components/Overview'

export function Details() {

    const{ id } = useParams()
    
// DETALHES
        const[movieDetails, setMovieDetails] = useState({});
        const[genres, setGenres] = useState([])
        const[productionCompanies, setProductionCompanies] = useState([])
        useEffect(()=>{
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`)
            .then(response => response.json())
            .then(details => {
                return(
                    setMovieDetails(details),
                    setProductionCompanies(details.production_companies),
                    setGenres(details.genres)
                )})
            }, [])


// LINK DO TRAILER
    const[movieTrailer, setMovieTrailer] = useState({})
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKey}&language=en-US`)
        .then(response => response.json())
        .then(data => setMovieTrailer(data.results[3]))
    }, [id])


// Actors
    const[cast, setCast] = useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKey}&language=en-US`)
        .then(response => response.json())
        .then(castData => setCast(castData.cast))
    }, [])



// FUNÇÃO PRA DAR CONSOLE LOG NAS RESPONSE
    let count = 0
    function temporaria(count){
        if(count == 0){
            console.log(movieDetails)
            count++
        }
    }
    temporaria(count)




    return(
        <>
        <Header />
        <DetailsContainer>
            <Video trailerId={movieTrailer.key}/>
            <Overview overview={movieDetails.overview}/>
            <ButtonContainer href={movieDetails.homepage} target='_blank'>Assita agora</ButtonContainer>

            <About
                title={movieDetails.title}
                runtime={movieDetails.runtime}
                production_companies={productionCompanies}
                genres={genres}
                rating={movieDetails.vote_average}
                release_date={movieDetails.release_date}
                cast={cast}
            />
        </DetailsContainer>
        <h1>botar filmes semelhantes, cada um será um "Movie"</h1> 
        </>
    )
}