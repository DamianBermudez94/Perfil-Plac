import React,{ useState } from 'react'
import { Inicio } from "../Inicio/Inicio"
import { Acerca } from "../Acerca/Acerca";
import { Contacto } from "../Contacto/Contacto";
import { Proyecto } from "../Productos/Productos";




export function Main() {
    return (


        <main>
            <Inicio></Inicio>
            <Acerca></Acerca>
            <Proyecto></Proyecto>
            <Contacto></Contacto>
        </main>


    );
}