


export const createUser = async (formData: User) => {
    const res = await fetch('http://localhost:3000/api/v1/user', {
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/js"
        },
        body: JSON.stringify(formData),
        method: "POST"
    })
    const data = await res.json()
    return {
        status: res.status,
        msg: data.msg,
    }
}



export type User = {
    id?: string,
    email?: string,
    firstname?: string,
    lastname?: string,
    password?: string,
    verified?: boolean,
    weight?: number,
    height?: number,
    banner?: string,
    profilePic?: string,
    stats?: string,
    createdAt?: string,
    updatedAt?: string,
}