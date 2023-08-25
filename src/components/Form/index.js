import './Form.css'
import { Submission } from '../Submission';
import { Button } from '../Button';
import { useState } from 'react';

export const Form = (props) => {

    const[tank, setTank] = useState('')
    const[dps1, setDps1] = useState('')
    const[dps2, setDps2] = useState('')
    const[sup1, setSup1] = useState('')
    const[sup2, setSup2] = useState('')

    const onSave = (e) => {
        e.preventDefault()
        props.onRegisteredSquad({
            tank,
            dps1,
            dps2, 
            sup1, 
            sup2
        })
    }

    return (
        <div className="register">
            <h1>Register your squad</h1>
            <form onSubmit={onSave}>
                <div className="fill"> 
                    <div className="usernames">
                        <h2>Usernames</h2>
                        <div>
                            <Submission 
                                value = {tank}
                                onModified={value => setTank(value)}
                                placeholder="Tank..."/>
                            <Submission 
                                value = {dps1}
                                onModified={value => setDps1(value)} 
                                placeholder="DPS..."/>
                            <Submission 
                                value = {dps2}
                                onModified={value => setDps2(value)} 
                                placeholder="DPS..."/>
                            <Submission 
                                value = {sup1}
                                onModified={value => setSup1(value)} 
                                placeholder="Support..."/>
                            <Submission 
                                value = {sup2}
                                onModified={value => setSup2(value)} 
                                placeholder="Support..."/>
                        </div>
                    </div>
                </div> 
                 <Button>Register</Button>
            </form>
           
        </div>
    );
}