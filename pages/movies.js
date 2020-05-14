import React from "react";
import Menu from "../components/Menu";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

export default function movies(props) {  
     //en caso de no usar los props, solo declarar el arreglo aqui
     // const movies = [{
     //           id: "joker",
     //           name: "Joker"
     //      },
     //      {
     //           id: "spiderman",
     //           name: "Spider-Man"
     //      },
     //      {
     //           id: "batman",
     //           name: "Batman"
     //      }

     // ];

     const { movies } = props;
     return (
          <div>
               <Menu />
               <h1> Estamos en la pagina de peliculas</h1>
               {movies.map((movie, index) => (
                    <Link key={index} href="/movie/[movie]"
                         as={`/movie/${movie.id}`}>
                         <a style={{marginRight:20}}>{movie.name}</a>
                    </Link>
               ))}
          </div>
     );
}

//para obtener los props iniciales de un componente o INICIALIZARLOS similar al componentdidmount
movies.getInitialProps = async () => {
     //haciendo peticiones mediante api
     const res = await fetch("http://soyadannajera.pro/api/array.json");

     const movies = await res.json();


     // const movies = [{
     //           id: "joker",
     //           name: "Joker"
     //      },
     //      {
     //           id: "spiderman",
     //           name: "Spider-Man"
     //      },
     //      {
     //           id: "batman",
     //           name: "Batman"
     //      }

     // ];

     return { movies };
};