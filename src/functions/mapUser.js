export default function mapUser(user){
    return {
        id: user.id,
        fullName: user.firstName + " " + user.lastName + " " + user.maidenName,
        age: user.age,
        phone: user.phone,
        address: user.address.address + ", " + user.address.city,
        height: user.height,
        weight: user.weight,
        email: user.email		
    }
}