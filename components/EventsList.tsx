"use client"

import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"

const EventsList = () => {
    const events = useQuery(api.events.get)
    console.log(events)
  return (
    <div>EventsList</div>
  )
}

export default EventsList