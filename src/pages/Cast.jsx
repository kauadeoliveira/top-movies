import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Actor } from "../components/Actor"
import { Header } from "../components/Header"
import { APIKey } from "../config/key"
import { CastContainer } from "../styles/styles"

export const Cast = () => {
    const{ id } = useParams()
    const[credits, setCredits] = useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKey}&language=en-US`)
        .then(response => response.json())
        .then(dataCredits => setCredits(dataCredits.cast))
    }, [])

    setTimeout(() => {
        console.log(credits)
    }, 1000)

    return(
        <>
            <Header title={'Cast'} />
            <CastContainer>
                {credits.map(actor => {
                    if(actor.known_for_department === 'Acting' && actor.profile_path != null){
                        return(
                            <a href={`https://en.wikipedia.org/wiki/${actor.name}`} target="_blank">
                                <Actor name={actor.name} profile={actor.profile_path} rating={actor.popularity} character={actor.character}/>
                            </a>
                            )
                        }
                    })}
            </CastContainer>
        </>
    )
}