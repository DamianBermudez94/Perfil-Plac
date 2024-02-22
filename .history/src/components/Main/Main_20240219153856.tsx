import React,{ useState } from 'react'
import { Hero } from "../Inicio/Inicio"
import { Acerca } from "../Acerca/acerda-me";
import { Contacto } from "../Contacto/Contacto";
import { Proyecto } from "../Productos/Productos";




export function Main() {
    return (


        <main>
            <Hero></Hero>
            <Acerca></Acerca>
            <Proyecto></Proyecto>
            <Contacto></Contacto>
        </main>


    );
}