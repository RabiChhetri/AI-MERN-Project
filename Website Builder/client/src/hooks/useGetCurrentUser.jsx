import React from 'react'
import { useEffect } from 'react'
import axios from "axios";
import { serverUrl } from "../config";

function useGetCurrentUser() {
  return (
    useEffect(() => {
        async function getCurrentUser() {
            try {
                const result = await axios.get(`${serverUrl}/api/user/me`, {withCredentials: true})
                console.log( result);
            } catch (error) {
                console.error("Error fetching current user:", error);
            }
        }
        getCurrentUser()
    }, [])
  )
}

export default useGetCurrentUser
