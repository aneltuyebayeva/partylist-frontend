import { useState, createContext } from 'react'
import axios from 'axios'

 const UserContext = createContext()

 const UserProvider = ({ children }) => {
     const [user, setUser] = useState({})

     const fetchUser = () => {
         const userId = localStorage.getItem('userId')
         if (userId) {
             axios.get(`${process.env.REACT_APP_BACKEND}/users/verify`, {
                 headers: {
                     authorization: userId
                 }
             }).then((response) => setUser(response.data.user))
         }
     }
     const state = {
         userState: [user, setUser],
         fetchUser: fetchUser
     }

     return(
         <UserContext.Provider value = {state}>
             {children}
         </UserContext.Provider>
     )
 }

 export{UserProvider, UserContext}