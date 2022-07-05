import { useEffect, useState } from "react"
import { Header } from "../components/Header"
import Movie from "../components/Movie"
import '../styles/geral.css'
import { APIKey } from "../config/key"
import { HomeContainer } from "../styles/styles"
import { Link } from 'react-router-dom'


export function Home() {
    const[homePage, setHomePage] = useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1
        `)
        .then(response => response.json())
        .then(data => setHomePage(data.results))
    }, [])

    return(
        <>        
            <Header title={'Top Movies'}/>
            <HomeContainer>
                {
                    homePage.map(movie =>{
                        return(
                            <Link to={`/details/${movie.id}`} key={movie.id}>
                                <Movie
                                   
                                    image={movie.poster_path}
                                    title={movie.title}
                                    rating={movie.vote_average}
                                    date={movie.release_date.split('-')[0]}
                                    movieId={movie.id}
                                />
                            </Link>
                            )
                        })  
                }
            </HomeContainer>
        </>
    )
}


