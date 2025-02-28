import axios from "axios"

const server = "http://localhost:5000/api/expense" 
const token = localStorage.getItem("token")

export const getAllExpenses = async () => {
    try{
        console.log("Fetching for",token)
        const response = await axios.get(server, {
            headers:{
                Authorization:`Bearer ${token}`
            }
        })

        if(response.status == 201){
            return response.data
        }
    }
    catch(error){
        console.log("Error in fetching",error.message)
        return null
    }
}

export const addExpense = async (newExpense) => {
    try{
        console.log("Fetching for",token)
        const response = await axios.post(server, newExpense, {
            headers:{
                Authorization:`Bearer ${token}`
            }
        })

        if(response.status == 201){
            return response.data
        }
    }
    catch(error){
        console.log("Error in fetching",error.message)
        return null
    }
}