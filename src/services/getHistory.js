export const getHistory = async () => {
    try {
        const response = await fetch(`https://coding-challenge-api.aerolab.co/user/history`, {
            headers: { Authorization: `${import.meta.env.VITE_API_KEY_TOKEN}` }
        });
        if (response.status === 200) {
            return await response.json();
        } else if (response.status === 404) {
            console.log("404");
        } else {
            console.log("500");
        }
    } catch (error) {
        console.log(error);
    }
}