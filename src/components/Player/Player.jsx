import './Player.css'

import {RiDeleteBin2Fill} from 'react-icons/ri'
import { useState } from 'react'


const Player = ({name, role, img, backgroundColor}) => {

    const [card, SetCard] = useState(true)

    const deleteCard = () => {
        SetCard(false)
    }

    return (
        card && <div className='player'>
            <div className='header' style={{backgroundColor: backgroundColor}}>
                <img src={img} alt={name} />
                <button onClick={deleteCard}><RiDeleteBin2Fill /></button>
            </div>

            <div className='footer'>
                <h4>Nome: {name}</h4>
                <h5>Função: {role}</h5>
            </div>
        </div>
    )
}

export default Player;