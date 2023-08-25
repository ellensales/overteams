import './Team.css'
import { Role } from '../Role'

export const Team = (props) => {

    return(
        <section className="team">
            <Role squad = {props.squad} role ='tank' />
            <Role squad = {props.squad} role='dps1' />
            <Role squad = {props.squad} role='dps2' />
            <Role squad = {props.squad} role='sup1' />
            <Role squad = {props.squad} role='sup2' />
        </section>
    )

}