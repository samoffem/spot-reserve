import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getUSerById = query({
    args: {
        userId: v.string()
    },
    handler: async (ctx, {userId})=>{
        const user = await ctx.db
        .query("users")
        .withIndex("by_user_id", (q)=> q.eq("userId", userId))
        .first()

        return user
    }
})

export const updateUser = mutation({
    args: {
        userId: v.string(),
        email: v.string(),
        name: v.string()
    },
    handler: async (ctx, {userId, email, name})=>{
        //check for existing user
        const existingUser = await ctx.db
            .query("users")
            .withIndex("by_user_id", (q)=> q.eq("userId", userId))
            .first()
        if(existingUser){
            await ctx.db.patch(existingUser._id, {
                name, email
            })
            return existingUser._id
        }

        const newUser = await ctx.db.insert("users", {
            userId,
            name,
            email,
            stripeConnectId: undefined
        }) 
        return newUser
        
    }
})