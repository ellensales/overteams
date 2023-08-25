import './Team.css'
import { Nickname } from '../Nickname'

export const Team = (props) => {

    console.log(props.team.tank)

    return(
        <section className="team section">
            <div className="roles">
                <h1>Tank</h1>
                <h1>DPS1</h1>
                <h1>DPS2</h1>
                <h1>Sup1</h1>
                <h1>Sup2</h1>
            </div>    
            <div className="nicknames">
                <Nickname nickname={props.team.tank}/>
                <Nickname nickname={props.team.dps1}/>
                <Nickname nickname={props.team.dps2}/>
                <Nickname nickname={props.team.sup1}/>
                <Nickname nickname={props.team.sup2}/>
            </div>
        </section>
    )

}