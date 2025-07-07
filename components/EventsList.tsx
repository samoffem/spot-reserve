"use client"

import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"

const EventsList = () => {
    const events = useQuery(api.events.get)
    console.log(events)

    if(!events){
        return (
            <div>Loading...</div>
        )
    }

    const upcomingEvents = events.filter(event=> event.eventDate > Date.now())
        .sort((a,b)=> a.eventDate - b.eventDate)

    const pastEvent = events.filter(event=> event.eventDate <= Date.now())
        .sort((a, b)=> b.eventDate - a.eventDate)
  return (
    <div>EventsList</div>
  )
}



export default EventsList