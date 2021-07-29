import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { deleteContact, getOneContact } from '../Js/action/contact'
import { useDispatch } from 'react-redux'
import {  Link } from "react-router-dom";



const Contact = ({hamza}) => {
    const dispatch = useDispatch()
 const handelDelete = ()=>{
        dispatch(deleteContact(hamza._id))
 }
    return (
        <div style={{marginBottom: "20px"}}>
           <Card>
      <Card.Content>
       
        <Card.Header>{hamza.name}</Card.Header>
        <Card.Meta>{hamza.email}</Card.Meta>
        <Card.Description>
          Phone : <strong>{hamza.phone}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
            <Link to={`/edit/${hamza._id}`}  >
          <Button basic color='green' onClick={()=>dispatch(getOneContact(hamza._id))}>
            Edit
          </Button>
          </Link>
          <Button basic color='red' onClick={handelDelete}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card> 
        </div>
    )
}

export default Contact
