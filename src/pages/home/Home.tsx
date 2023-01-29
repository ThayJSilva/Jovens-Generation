import { Grid } from "@material-ui/core";
import './Home.css'

function Home() {
    return (
        <>
            <Grid container className="back">
                <Grid item xs={6}>
                    <div className="modificar">
                        <h1>Jovens em Ação Generation!</h1>
                    </div>
                    <div></div>
                    <p className="adicionar"> “O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo".Compartilhe aqui seus projetos.</p>


                </Grid>
                <Grid item xs={6} >
                    <img className="mulher" src="https://i.pinimg.com/564x/25/71/1e/25711e97674adcca8cd3577530bbf849.jpg" alt="" width="380px" />
                </Grid>
            </Grid>

            <div >
                <a href="/projetos"><button className="botao1">Explorar</button></a>
                <a href="/adicionarprojeto"><button className="botao2">Adicionar Projeto</button></a>

            </div>

        </>
    )
}

export default Home;