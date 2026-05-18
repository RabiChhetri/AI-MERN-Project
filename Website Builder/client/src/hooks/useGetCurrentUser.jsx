import React from 'react'
import { useEffect } from 'react'
import axios from "axios";
import { serverUrl } from "../config";
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';

function useGetCurrentUser() {
    const dispatch = useDispatch()
  return (
    useEffect(() => {
        async function getCurrentUser() {
            try {
                const result = await axios.get(`${serverUrl}/api/user/me`, {withCredentials: true})
                dispatch(setUserData(result.data))
            } catch (error) {
                console.error("Error fetching current user:", error);
            }
        }
        getCurrentUser()
    }, [])
  )
}

export default useGetCurrentUser
