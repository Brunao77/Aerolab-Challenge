export const postRedeem = async (id) => {

    const response = await fetch(`https://coding-challenge-api.aerolab.co/redeem`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `${import.meta.env.VITE_API_KEY_TOKEN}` },
        body: JSON.stringify({
            'productId': id
        })
    })
    
    return await response.json()
}