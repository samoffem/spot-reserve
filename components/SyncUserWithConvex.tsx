"use client"

import { api } from "@/convex/_generated/api"
import { useUser } from "@clerk/nextjs"
import { useMutation } from "convex/react"
import { useEffect } from "react"



const SyncUserWithConvex = () => {

    const {user} = useUser()
    const updateUser = useMutation(api.users.updateUser)

    useEffect(()=>{
        if(!user){
            return
        }
        const syncUser = async()=>{
            try {
                await updateUser({
                    userId: user.id,
                    name: `${user.firstName?? ""} ${user.lastName?? ""}`,
                    email: user.emailAddresses[0]?.emailAddress?? ""

                })
            } catch (error) {
                
            }
        }

    }, [user])

  return (
    <div>SyncUserWithConvex</div>
  )
}

export default SyncUserWithConvex