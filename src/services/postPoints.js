export const postPoints = async (points) => {

    const response = await fetch(`https://coding-challenge-api.aerolab.co/user/points`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `${import.meta.env.VITE_API_KEY_TOKEN}` },
        body: JSON.stringify({
            'amount': points
        })
    })
    
    return await response.json()
}

