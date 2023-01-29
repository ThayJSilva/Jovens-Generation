import { Card, CardMedia, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import './AdicionarProjeto.css'

function AdicionarProjeto() {
    return (
        <div className='back'>
            <div>
                <div className="container-titulo">
                    <h1 className="texto-titulo">Adicionar projeto</h1>
                    <h2 className="texto-subtitulo">Adicione o Projeto Integrador do seu grupo</h2>
                </div>
            </div>
            <div className="center">
                <div className="black" >
                    <div className="text">
                        <h3 className="text-white">Projeto integrador</h3>
                        <p className="margin-top-30 text-white">Turma:</p>
                        <input className="input-dado"></input>
                        <p className="margin-top-30 text-white">Nome dos participantes :</p>
                        <input className="input-dado"></input>
                        <p className="margin-top-30 text-white">Nome do projeto:</p>
                        <input className="input-dado"></input>
                        <p className="margin-top-30 text-white">Link do projeto:</p>
                        <input className="input-dado"></input>
                        <p className="margin-top-30 text-white">Logo do projeto:</p>
                        <input className="input-dado"></input>
                        <div className="block"><Link to={"/projetos"} className="semlink"><button className="button-add button-design">Adicionar Projeto</button>
                        </Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default AdicionarProjeto;