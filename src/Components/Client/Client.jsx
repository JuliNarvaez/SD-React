import { useState, useEffect } from "react";

function Client() {
    const [clients, setClients] = useState(null)

    useEffect(() => {
        const getClients = async () => {
            const data = await getClient()
            setClients(data);
        }
        if (clients.length === 0) {
            getClients();
        }
    }, [clients])

    return (
        <></>
    )
}

export default Client;