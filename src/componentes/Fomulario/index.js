import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [nomeTime, setNomeTime] = useState('')
  const [corTime, setCorTime] = useState('')


  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da sua imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form onSubmit={(evento) => {
        evento.preventDefault()
        props.cadastrarTime({ nome: nomeTime, cor: corTime })
      }}>
        <h2>Preencha os dados para criar um novo time</h2>
        <CampoTexto
          obrigatorio
          label="Nome do Time"
          placeholder="Digite o nome do Time"
          valor={nomeTime}
          aoAlterado={valor => setNomeTime(valor)}
        />
        <CampoTexto
          obrigatorio
          label="Cor do Time"
          placeholder="Selecione a cor do Time"
          valor={corTime}
          aoAlterado={valor => setCorTime(valor)}
        />
        <Botao>Criar um Novo Time</Botao>
      </form>
    </section >
  )
}

export default Formulario