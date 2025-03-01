import axios from "axios"

const backend = "https://expense-tracker-i40u.onrender.com"

const server = `${backend}/api/expense`
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


export const updateExpense = async (updatedExpense) => {
    try{
        console.log("Fetching for",token)
        const response = await axios.put(`${server}/${updatedExpense._id}`, updatedExpense, {
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


export const deleteExpense = async (expenseId) => {
    try{
        console.log("Fetching for",token)
        const response = await axios.delete(`${server}/${expenseId}`, {
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