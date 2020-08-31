import React from "react"
import Card from "react-bootstrap/Card"

export default function Event(props){   
    return(
        <div>
            <h2 className={'eventH2'}>{props.eventName.toUpperCase()}</h2>
            <Card className={'eventCard'} style={{borderRadius:'5px', border: 'none', backgroundColor: '#3f465a'}}>
                <Card.Img className={'cardImg'} variant="top" src={require("../img/"+props.imagesrc)}/>
                <Card.Body className={'cardBody'} style={{padding: '0'}}>
                    {
                        (props.desc.length > 80)
                        ? <Card.Text className={'cardDesc'}>{props.desc.charAt(0).toUpperCase()+props.desc.slice(1, 79)+"... (Read more)"}</Card.Text>
                        : <Card.Text className={'cardDesc'}>{props.desc.charAt(0).toUpperCase()+props.desc.slice(1)}</Card.Text>
                    }
                </Card.Body>
            </Card>
        </div>
    )
}