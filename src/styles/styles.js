import styled from "styled-components";
import { Home } from "../pages/Home";
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
    background-color: #252537;
    width: 100%;
    height: 5rem;
    text-align: center;
    cursor: default;
    line-height: 5rem;
    
    h1{
        font-family: 'Caveat', cursive;
        color: #fa7970;
        text-decoration: underline;
        font-size: 3rem;
    }
    
    a{ 
        display: flex;
        background-color: #fa7970;
        width: 15%;
        height: 3rem;
        line-height: 3rem;
        justify-content: center;
        color: white;
        text-decoration: none;
    }
`

export const CardSmall = styled.div`
    border-radius: 1rem;
    width: 85vw;
    height: 30vh;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: #2b2c40;


    img{
        width: 6rem;
        margin-right: 1rem;
    }

    .card-description-sm{
        display: flex;
        flex-direction: column;
    }
    
    span{
        font-weight: bold;
        color: #fa7970;
    }
    .rating{
        display: flex;
        align-items: center;
        height: .7rem;
        line-height: .7rem;
        font-size: .7rem;
        color: orange;
    }

    h1{
        font-size: 1.1rem;
    }


/* ================================= */
        /* MEDIA QUERY */
/* ================================= */
    @media(min-width: 700px){
        width: 70vw;
    }


    @media(min-width: 850px){
        width: 50vw;
        strong{
            font-size: 0.8rem;
        }
        span{
            font-size: 0.9rem;
        }
        h1{
            font-size: 1.5rem;
        }
    }


    @media(min-width: 1100px){
        display: none;
    }
`





export const CardLarge = styled.div`
    display: none;


/* ================================= */
            /* MEDIA QUERY */
/* ================================= */
    @media(min-width: 1100px){
        display: block;
        background-color: transparent;
        width: 100%;
        height: 50vh;
        margin-bottom: 5rem;

        .rating{
            background-color: #fa7970;
            color: white;
            text-align: center;
            border-radius: 10px;
            width: 3rem;
            height: 1.5rem;
            line-height: 1.5rem;
            margin: 0 auto;
            z-index: 1;
            position: relative;
            top: 0.75rem;
        }

        img{
            width: 100%;
        }

        h1{
            font-size: 0.9rem;
        }

        .card-description-lg{
            line-height: 20px;
        }
    }

`





export const HomeContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    background-color: #1c1c28;


    h1{
        color: white;
    }

    strong{
        font-size: 0.6rem;
        font-weight: normal;
        color: #a5a5a5;
        margin-right: 5px;
    }
    
    .genres-container{
        flex-wrap: wrap;
    }
    
    a{
        transition: all 0.3s;
        text-decoration: none;
    }
    
    a:hover{
        transform: scale(1.05);
    }

    .genres-strong:not(:last-child)::after{
        content: ' •';
    }


/* ================================= */
            /* MEDIA QUERY */
/* ================================= */
        @media(min-width:1100px){
            padding: 2rem;
            gap: 50px;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
        }
    

        @media(max-width: 1100px){
            display: flex;
            flex-direction: column;
        }
`





export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
    color: white;

`



export const ActorCard = styled.a`
    display: flex;
    width: 20rem;
    height: 10rem;
    background-color: black;
    color: white;
    margin-bottom: 1rem;

    img{
        width: 50%;
    }

`


export const CastContainer = styled.div`
    a{
        color: white;
        transition: all 0.3s;
        text-decoration: none;
        margin-bottom: 1rem;
    }
    
    a:hover{
        transform: scale(1.05);
    }

    div .card-description-sm{
        display: flex;
        flex-direction: column;
        line-height: 30px;
    }
    

    @media(min-width: 1100px){
        padding: 0 2rem;
        display: grid;
        grid-template-columns: repeat(5, 1fr);

        img{
            width: 90%;
        }
        .rating:hover{
            background-color: red;
        }
    }
`

export const AboutContainer = styled.ul`
    padding: 1rem;
    background-color: #252537;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 0.5rem;
    list-style: none;
    margin: 1rem auto;


    h2{
        font-size: 1.1rem;
        margin-bottom: .8rem;
    }

    .about-box{
        padding: 1rem;
        background-color: #252537;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        border-radius: 0.5rem;
    }

    a{
        color: white;
        opacity: 0.9;
        text-decoration: none;
        cursor: pointer;
    }
    
    span{
        opacity: 0.9;
    }
    
    a:not(.custom-buttons):hover{
        text-decoration: underline;
    }

    li:not(:last-child){
        margin-bottom: .5rem;
    }

    li:nth-child(3) a:not(:last-child)::after{
        content: ', ';
    }

    
    li:nth-child(5) span{
        font-weight: bold;
        color: #fa7970;
    }

    li:nth-child(7) a:not(:last-child)::after{
        content: ', ';
    }

    li{
        font-size: .8rem;
    }

    strong, h2{
        opacity: 0.7;
        font-weight: 700;
    }
    .custom-buttons{
        display: inline-block;
        background-color: #fa7970;
        padding: .3rem .5rem;
        border-radius: 1rem;
    }
    .custom-buttons:not(:last-child){
        margin-right: .2rem;
    }

`

export const OverviewContainer = styled.div`
    margin: 1rem 0;
    margin-bottom: 1rem;
    

    p{
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.9rem;
    }

    h1{
        font-size: 1.2rem;
    }
`

export const ButtonContainer = styled.a`
    display: inline-block;
    background-color: #fa7970;
    color: white !important;
    padding: .3rem .5rem;
    border-radius: 1rem;
    text-align: center;
    cursor: pointer;
    transition: all .3s;
    text-decoration: none;
    font-weight: 700;

    :hover{
        background-color: #f96c62;
    }
`