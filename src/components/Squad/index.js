import { Team } from '../Team'
import './Squad.css'

export const Squad = (props) => {

    console.log(props.squads)
    
    return(
        <section className="squad">
            <h1>Squads</h1>
            <div className="team list">
                {props.squads.map(squad => <Team team={squad}/>)}
            </div>
            
        </section>
    )
}