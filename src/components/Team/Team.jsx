import Player from '../Player/Player';
import './Team.css'

const Team = (props) => {

    return (
        (props.players.length > 0 ) && <section className='team' style={{ backgroundColor: props.secondaryColor }}>
             
            <h3 style={{borderColor: props.primaryColor }}>{props.name}</h3><br></br>
            <button className='deleteBtn'
                    onClick={props.deleteTeam} 
                    style={{backgroundColor: props.secondaryColor, borderColor: props.primaryColor, color: props.primaryColor}}
                    >
                    Excluir Time
                </button>
            
            <div className='players'>
                {props.players.map(player => 
                    <Player 
                        backgroundColor={props.primaryColor} 
                        key={player.name} 
                        name={player.name} 
                        role={player.role} 
                        img={player.image}
                    />)
                }
            </div>
            
        </section>
    )
}

export default Team;