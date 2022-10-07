import "./Form.css"

import TextField from '../textField/TextField'
import DropDownList from "../dropDownList/DropDownList";
import Button from "../button/Button";

import {v4 as uuidv4} from "uuid";
import { useState } from "react";

const Form = (props) => {

   

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [game, setGame] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onPlayerRegistered({
          name: name,
          role: role,
          image: image,
          game: game,
          id: uuidv4()
        })
        setName('')
        setRole('')
        setImage('')
        setGame('')
    }

    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
              <h2>Preencha os dados para criar o card do jogador</h2>   
              <TextField 
                required={true} 
                label="Nome:" 
                placeholder="Digite o seu nome"
                value={name} 
                onChanged={value => setName(value)}
              />

              <TextField 
                required={true} 
                label="Função:" 
                placeholder="Digite a sua função" 
                value={role}
                onChanged={value => setRole(value)}
              />

              <TextField 
                label="Imagem:" 
                placeholder="Digite o endereço da imagem"
                value={image}
                onChanged={value => setImage(value)} 
              />

              <DropDownList 
                required={true} 
                label="Jogo:" 
                itens={props.gamesName}
                value={game}
                onChanged={value => setGame(value)} 
              />
              <Button>
                Criar Card
              </Button>
            </form>
        </section>
    )
}

export default Form;