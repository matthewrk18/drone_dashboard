const token = `423c5c4fac728844b0a73c49c96d02c27c092e713bf5554a`

export const server_calls = {
    get: async () => {
        const response = await fetch('https://operators-drones.herokuapp.com/api/drones',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch your data from the server...')
        }
        return await response.json()
    },
    create: async (data: any = {}) =>{
        const response = await fetch('https://operators-drones.herokuapp.com/api/drones', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create your drone...')
        }
        console.log('response from api', response)
        return await response.json()
    },
    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://operators-drones.herokuapp.com/api/drones/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to update your drone...')
        }
        console.log(`Updated drone ${id} with ${data}`)
        return await response.json()
    },
    delete: async(id:string) =>{
        const response = await fetch(`https://operators-drones.herokuapp.com/api/drones/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Could not delete your drone...')
        }
    }
}