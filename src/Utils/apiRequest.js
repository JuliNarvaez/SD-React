const baseUrl = 'http://localhost:3333/';

export async function getProfile() {
    try {
        const response = await fetch(`${baseUrl}profile`)
        const profile = response.json()
        return profile;
    } catch (error) {
        console.log(error.message);
    }
}

export async function getSeedbed() {
    try {
        const response = await fetch(`${baseUrl}seedbeds`)
        const seedbeds = response.json()
        return seedbeds;
    } catch (error) {
        console.log(error.message);
    }
}

export async function getClient() {
    try {
        const response = await fetch(`${baseUrl}clients`);
        const clients = response.json()
        return clients;
    } catch (error) {
        console.log(error.message);
    }
}

export async function deleteData(id, type) {
    try {
        const response = await fetch(`${baseUrl}${type}/${id}`, {
            method: 'DELETE',
        })
        console.log(`Deleted ${type} User in ${response}`)
    } catch (error) {
        console.error(error.message);
    }
}







