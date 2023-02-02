import User from "../schema/schema.js";

export const getUsers = async(request,response)=>{
    try {
        const users = await User.find({})
        response.status(200).json(users )
    } catch (error) {
        response.status(404).json({message:error.message})
    }
}

export const saveUser = async(request,response)=>{
    try {
        const newUser = User(request.body) 
        await newUser.save()
        response.status(201).json(newUser)
    } catch (error) {
        response.status(404).json({message:error.message})
    }
}

export const getUser = async(request,response)=>{
    try {
        const user = await User.findById(request.params.id)
        response.status(200).json(user)
    } catch (error) {
        response.status(404).json({message:error.message})
    }
}

export const editUser = async(request,response)=>{
    const editUser = User(request.body)
    try {
        const user = await User.findByIdAndUpdate(request.params.id,editUser)
        response.status(200).json(user)
    } catch (error) {
        response.status(409).json({message:error.message})
    }
}

export const deleteUser = async(request,response)=>{
    try {
        const user = await User.findByIdAndDelete(request.params.id)
        response.status(200).json(user)
    } catch (error) {
        response.status(404).json({message:error.message})
    }
}
