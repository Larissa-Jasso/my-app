import React from "react";
import Menu from "../../components/Menu";
import Router,{ useRouter } from "next/router";

export default function movie() {
//useRouter es para ver lo que nos esta regresando una ruta osea el link, la info que nos trae
     const router = useRouter();
     const { id } = router.query;

     const gotoHome = () => {
          Router.push("/");
     }

     return (
          <div>
               <Menu />  
               <h2 style={{ textAlign: "center" }}>Estas viendo...</h2>
               <h1 style={{ textAlign: "center" }}>{id}</h1>
               <div div style = {
                    {
                         textAlign: "center"
                    }
               } >
                    <button onClick={gotoHome}>Ir a inicio</button>
               </div>
          </div>
     )
}
movie.getInitialProps = async () => {
     return {};
};