let reg_id = /^\d+$/;
let reg_name = /^[a-zA-Z]{1}\d{3}$/;
let reg_type = /\w/;
let reg_price = /^\d+$/;
let reg_viwe = /\w/;
let reg_status= /\w/;
let reg_search = /^[a-zA-Z]+$/

var hall = new Array();
    hall.push({ hall_id : 1, hall_name :"ราชพฤกษ์0301", hall_price : 3000 , hall_type : "เหมาะสำหรับประชุม" , hall_viwe : "ไม่มีวิว", hall_status : "ชำรุดรอซ่อม"});
    hall.push({ hall_id : 2, hall_name :"อัญชัญ0302", hall_price : 5000 , hall_type : "เหมาะสำหรับประชุม" , hall_viwe : "ตึกระฟ้า", hall_status : "ปรกติ"});
    hall.push({ hall_id : 3, hall_name :"ดาหลา0401", hall_price : 10000 , hall_type : "เหมาะสำหรับงานแต่ง" , hall_viwe : "สวนลอย", hall_status : "ปรกติ"});
    hall.push({ hall_id : 4, hall_name :"เฟื่องฟ้า0402", hall_price : 12000 , hall_type : "เหมาะสำหรับงานแต่ง" , hall_viwe : "ตึกระฟ้า", hall_status : "ปิดถาวร"});

    console.table(hall);

searchType = (key) => {
    let check_search = reg_search.test(key);
    if (check_search == true) {
        let answer = hall.filter(type => (type.type_name.includes(key)))
        console.table(answer)
        return [answer.length, answer]
    } else {
        throw 'กรอกข้อมูลผิดพลาด กรุณาลองใหม่อีกครั้ง'
    }
        
}


addHall = (id , price , type , viwe, status) => {
    if ( (reg_hall.test(hall_id) && reg_name.test(hall_name) && reg_price.test(hall_price && reg_type.test(hall_type) && reg_viwe.test(hall_viwe) && reg_status.test(room_status)) == true ) 
    ){
        let similar_number = false;
        hall.forEach((hall) => {
            if(hall.number == number) {
                console.log("ขออภัย!ห้องนี้เต็มแล้วกรุณาเปลี่ยนห้อง");
                similar_number = true;
            } 
        })
        if (similar_number == false) {
            id++;
            hall.push({ hall_id:id, hall_name: name , room_price: price, room_type: type,room_viwe:viwe, room_status: status});
            checkType();
            return room;
        } else if (similar_number == true) {
            throw "ขออภัย!ห้องนี้เต็มแล้วกรุณาเปลี่ยนหมายเลขห้อง";
        }
    } else {
        throw "กรอกข้อมูลผิดพลาด กรุณาลองใหม่อีกครั้ง";
    }
        
}    


showHall = () => {
    console.table(hall)
}

module.exports={
    searchType: searchType,
    addHall: addHall,
    showHall: showHall,
    hall:hall
}