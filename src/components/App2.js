import React, { useState, useEffect } from "react"
import eventInfo from "../eventInfo.js"
import Event from "./Event.js"
import { Container, Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {

    var tagList = new Set()
    eventInfo.map(e=>{
        e.tags.forEach(t=>{
            tagList.add(t)
        })
    })
    tagList = Array.from(tagList);

    var buttonsObj = {}
    tagList.forEach((idx)=>{
        buttonsObj[idx] = false
    })

    var tagsObject = {}
    tagList.forEach(t2 => {
        tagsObject[t2] = "notSelected"
    })
  
    const [tagButtons, setTagButtons] = useState(
        {   
                tagInfo :  {
                "0": false,
                "1": false, 
                "2": false, 
                "3": false, 
                "4": false, 
                "5": false, 
                "6": false, 
                "7": false, 
                "8": false, 
                "9": false, 
                "10": false, 
                "11": false, 
                "12": false, 
                "13": false, 
                "14": false,
                },
            })

    const events = 
            {
                "0": {
                    show: false,
                    eventID: eventInfo[0],
                    },
                
                
                "1": {
                    show: false,
                    eventID: eventInfo[1],
                    },
                
                
                "2": {
                    show: false,
                    eventID: eventInfo[2],
                    },
                
            
                "3": {
                    show: false,
                    eventID: eventInfo[3],
                    },
                
                
                "4": {
                    show: false,
                    eventID: eventInfo[4],
                    },
                
                
                "5": {
                    show: false,
                    eventID: eventInfo[5],
                    },
                
                
                "6": {
                    show: false,
                    eventID: eventInfo[6],
                    },
                
                
                "7": {
                    show: false,
                    eventID: eventInfo[7],
                    },
                
                
                "8": {
                    show: false,
                    eventID: eventInfo[8],
                    }, 
                
                        
                "9": {
                    show: false,
                    eventID: eventInfo[9],
                    },
                

                "10": {
                    show: false,
                    eventID: eventInfo[10],
                    },
            }



    function changeButton(event){
        const {id} = event.target    
        setTagButtons(prevValue => {
            return{
                ...prevValue,
                tagInfo : {...prevValue.tagInfo, [id]: !prevValue.tagInfo[id]},
            }
        })
    }
        
        // console.log(setUpEvents)
            // console.log(q[1].eventID))

        const [tR, setTR] = useState([])
        // console.log(tR)
        useEffect(() => {
            const tempSet = new Set()
            if(Object.keys(tagButtons.tagInfo).every((w) => !tagButtons.tagInfo[w])){
                eventInfo.map(ei => {
                    tempSet.add(ei)
                })
            }
            Object.entries(tagButtons.tagInfo).map((tk, i)=> {
                if(tk[1]){
                    Object.entries(events).map((ek, ev) => {
                        if(ek[1].eventID.tags.includes(tagList[i])){
                            tempSet.add(events[ev].eventID)
                        }
                    })
                }
            })
            setTR(Array.from(tempSet))
        }, [tagButtons]);
        
        function renderEvent(event, ind){
            return(
                <Event 
                    key={ind}
                    eventName={event.event_name}
                    venueName={event.venue_name}
                    desc={event.description}
                    tags={event.tags}
                    imagesrc={event.image_name}
                />
            )
        }

    return(
        <div className={'mainDiv'}>
            <div className={'mainContainer'}>
                <Row className={'tagRow'}>
                    
                    {/* <Col md={2} className={'tagCol'}> */}
                        <div className={'tagDiv'}>
                            {tagList.map((tag, index) => 
                                <button 
                                    key={index}
                                    id={index} 
                                    className={`tagButton ${tagButtons.tagInfo[index] ? 'selectedTag' : 'notSelectedTag'}`}
                                    value={tag}
                                    onClick={changeButton}
                                >{tag}</button>
                            )}
                        </div>
                    {/* </Col> */}
                </Row>
                <Row className={'eventsRow'}>
                    {/* <Col md={10} className={'eventsCol'}> */}
                        <div className={'eventsDiv'}>
                            {tR.map((a,i) => renderEvent(a,i))}
                        </div>
                    {/* </Col> */}
                </Row>
            </div>
        </div>
    
    )
}