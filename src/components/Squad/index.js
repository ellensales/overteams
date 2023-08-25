import { Team } from '../Team'
import './Squad.css'

export const Squad = (props) => {

    return(
        <section className="squad">
            <h1>Squads</h1>
            <div className="team list">
                <Team squads={props} />
            </div>
            
        </section>
    )
}