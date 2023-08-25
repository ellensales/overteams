import './Team.css'
import { Nickname } from '../Nickname'

export const Team = (props) => {

    console.log(props.team.tank)

    return(
        <section className="team section">
            <div className="roles">
                <h1 className="item">Tank</h1>
                <h1 className="item">DPS1</h1>
                <h1 className="item">DPS2</h1>
                <h1 className="item">Sup1</h1>
                <h1 className="item">Sup2</h1>
            </div>    
            <div className="nicknames">
                <Nickname className="item" nickname={props.team.tank}/>
                <Nickname className="item" nickname={props.team.dps1}/>
                <Nickname className="item" nickname={props.team.dps2}/>
                <Nickname className="item" nickname={props.team.sup1}/>
                <Nickname className="item" nickname={props.team.sup2}/>
            </div>
        </section>
    )

}