const {guest} = require('./guest1')
let reg_id = /^\d+$/;
let reg_name_guest = /^[a-zA-Z]{1,30}$/;
let reg_period = /^\d+$/;
let reg_price = /^\d+$/;

var pool = []
pool.push({id: 1, name_guest: 'Itadori Yuji', period: 1, price: 100})
pool.push({id: 2, name_guest: 'Fushigoro Megumi', period: 3, price: 150})


console.table(pool);

checkGuest = () => {
    pool.forEach((pool) => {
        guest.forEach((guest) => {
            if (pool.id == guest.id) {
                pool.name_guest = `${guest.firstname} ${guest.lastname}`
            }
        })
    })
}

checkPeriod = (period,price) => {
    if((reg_id.test(id)&& reg_name_guest.test(name_guest) && reg_period.test(period) && reg_price.test(price)== true)
    ){
        let period = false;
        period.forEach((period) => {
            if(period < 1) {
                console.log("ขออภัย ไม่สามารถจองสระว่ายน้ำได้ต่ำกว่า1ชั่วโมง");
                period = true
            }
        })
    } else {
        throw "ไม่สามรถจองได้"
    }
}

module.exports={
    checkGuest : checkGuest,
    checkPeriod : checkPeriod

}