import { useEffect, useState } from "react";
import getUser from "./functions/getUser";
import mapUser from "./functions/mapUser";

function UserDetails({isDisplayed, setIsDisplayed, userId}){
    if (!isDisplayed) return null;

    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const value = await getUser(userId);
                setUser(mapUser(value))
            } catch (error) {
                console.error('Error fetching user:', error); 
            }
        };
        fetchUser()
    }, [userId])

    return (
        <>
            <div className="modalOverlay">
                <div className="modal">
                    <div>Full name: {user.fullName}</div>
                    <div>Age: {user.age}</div>
                    <div>Address: {user.address}</div>
                    <div>Height: {user.height}</div>
                    <div>Weight: {user.weight}</div>
                    <div>Phone: {user.phone}</div>
                    <div>Email: {user.email}</div>
                    <div className="closeBtn" onClick={() => setIsDisplayed(false)}>&times;</div>
                </div>
            </div>
        </>
    )
}

export default UserDetails