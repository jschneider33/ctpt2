import React, { useState, useEffect } from "react"
import eventInfo from "../eventInfo.js"
import Event from "./Event.js"
import { Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {

    var tagList = new Set()
    eventInfo.map(e=>{
        e.tags.forEach(t=>{
            tagList.add(t)
        })
    })
    tagList = Array.from(tagList);

    var tI = {}
    tagList.forEach((tnull, index) => {
        tI[index] = false;
    })

    var eI = {}
    eventInfo.map((e, index) => {
        eI[index] = {show: false, eventID: e}
    })

    const events = eI
    const [tagButtons, setTagButtons] = useState({tagInfo :  tI})
    const [tR, setTR] = useState([])

    function changeButton(event){
        const {id} = event.target    
        setTagButtons(prevValue => {
            return{
                ...prevValue,
                tagInfo : {...prevValue.tagInfo, [id]: !prevValue.tagInfo[id]},
            }
        })
    }
        
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
                <Row>
                    <Col md={2} className={'tagCol'}>
                    <div className={"tagTitle"}>Please select a tag to filter results:</div>
                    <hr className={'tagHR'}/>
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
                    </Col>
                    <Col md={10} className={'eventsCol'}>
                        <div className={'eventsDiv'}>
                            {tR.map((a,i) => renderEvent(a,i))}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}