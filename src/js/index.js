let data = []
const fetchUserData = async () => {
    try {
        const fetchedData = await fetch('https://jsonplaceholder.typicode.com/users')
        data = await fetchedData.json()
        return data


    } catch (error) {
        console.log(error);
    }
}

fetchUserData()


const displayUser = () => {

    card.classList.replace('hidden','flex')
    // to generate a random number from 1 to 10
    const randomNumber = Math.floor(Math.random() * 10) + 1

    const user = data[randomNumber - 1]

    username.innerText = `#${user.username}`
    nameU.innerText = `${user.name}`
    email.innerText = `Email: ${user.email}`
    phone.innerText = `Phone: ${user.phone}`

}
