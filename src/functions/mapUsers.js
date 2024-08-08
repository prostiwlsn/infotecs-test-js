export default function mapUsers(users){
    const mappedUsers = []
    users.forEach(element => {
        mappedUsers.push({
            id: element.id,
            fullName: element.firstName + " " + element.lastName + " " + element.maidenName,
            age: element.age,
            gender: element.gender,
            phone: element.phone,
            address: element.address.address + ", " + element.address.city
        })
    });
    return mappedUsers
}