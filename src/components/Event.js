import React from "react"
// import VenueImg from "./VenueImg.js"
import Card from "react-bootstrap/Card"
// import * as S from "./app.module.css"



export default function Event(props){   
    return(
        <div>
            <Card className={'eventCard'} style={{borderRadius:'5px', border: 'none', backgroundColor: '#3f465a'}}>
                <Card.Img className={'cardImg'} variant="top" src={require("../img/"+props.imagesrc)}/>
                {/* className={S.cardImg} */}
                {/* <hr style={{marginTop: '0', marginBottom: '0'}}/> */}
                <Card.Body className={'cardBody'} style={{padding: '0'}}>
                    {/* <div> */}
                        <Card.Title className={'cardTitle' }>{props.eventName.toUpperCase()}</Card.Title>
                    {/* </div> */}
                    {/* <div> */}
                        {
                            (props.desc.length > 100)
                            ? <Card.Text className={'cardDesc'}>{props.desc.charAt(0).toUpperCase()+props.desc.slice(1, 100)+"... (Read more)"}</Card.Text>
                            : <Card.Text className={'cardDesc'}>{props.desc.charAt(0).toUpperCase()+props.desc.slice(1)}</Card.Text>
                        }
                    {/* </div> */}
                </Card.Body>
            </Card>
        </div>
    )
}