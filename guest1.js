let reg_id = /^\d+$/;
let reg_firstname = /^[a-zA-Z]{1,30}$/;
let reg_lastname = /^[a-zA-Z]{1,30}$/;
let reg_age = /\d+/;
let reg_phone_number = /^[0][689]\d{8}$/;

var guest = []
guest.push({id: 1,firstname: "Yuji", lastname: "Itadori", age: 20, phone_number: "0622545556"});
guest.push({id: 3,firstname: "Megumi", lastname: "Fushiguro", age: 20, phone_number: "0882696125"});

console.table(guest);

let id = 3;

addGuest = (firstname, lastname, age, phone_number) => {
    
    if ((reg_firstname.test(firstname) && reg_lastname.test(lastname) && reg_age.test(age) && reg_phonenum.test(phone_number)) == true) {
        if (age >= 18) {
            id++;
            guest.push({id: id,firstname: firstname, lastname: lastname, age: age, phone_number: phone_number})
            return guest;
        } else {
            throw "Sorry, your age under 18 can't be booked.";
        }
    } else {
        throw "There is an error in your data,please try again."
    }
    
}


showGuest = () => {
    console.table(guest);
}

module.exports = {
    addGuest: addGuest,
    showGuest: showGuest,
    guest: guest
}