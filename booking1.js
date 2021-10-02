let reg_id = /^\d+$/;
let reg_name_guest = /^[a-zA-Z]{1,30}$/;
let reg_number_of_guests = /^\d+$/;
let reg_number_of_date = /^\d+$/;
let reg_hall_price = /^\d+$/;
let reg_price_per_person = /^\d+$/;

var booking = []
booking.push({id: 1, hall_id: 1,  booking_id: 1, name_guest: 'Itadiri Yuji', number_of_guests: 100, number_of_date: 3, hall_price: 9000, price_per_person: 900 });
booking.push({id: 2, hall_id: 3,  booking_id: 3, name_guest: 'Fushiguro Megumi',number_of_guests: 100, number_of_date: 2, hall_price: 20000, price_per_person: 200 });

console.table(booking);

showBooking = (id) => {
    let check_id = reg_id.test(id)
    let hasBooking = false
    let index = 0
    let saveIndex;
    console.log(check_id)
    if(check_id == true) {

        booking.forEach((booking) => {
            if (booking.id == id) {
                saveIndex = index;
                hasBooking = true;
            }
            index++
        });

        if (hasBooking == true) {
            return booking[saveIndex];
            
        } else {
            throw 'Sorry this guest id not booking yet.'; 
        }
        
    } else {
        throw 'You entered the wrong information,please try again.'
    }
    
}


showAllBooking = () => {
    return booking;
}


edit_booking = (id, room_id, checkin_date, checkout_date) => {
    let index = 0;
    let saveIndex = 0;
    let hasId = false;
    if ( (reg_id.test(id) && reg_room_id.test(room_id) && reg_checkin_date.test(checkin_date) && reg_checkout_date.test(checkout_date)) == true) {
        booking.forEach((booking) => {
            if(booking.id == id) {
                hasId = true;
                saveIndex = index;
            }
            index++;
        })
        if (hasId == true) {
            booking[saveIndex].room_id = room_id
            booking[saveIndex].checkin_date = checkin_date
            booking[saveIndex].checkout_date = checkout_date

            return booking[saveIndex];
        }else if(hasId == false) {
            throw "There is no room id for this booking.";
        }
    } else {
        throw "You entered the wrong information,please try again.";
    }
    
    
}


module.exports = {
    showBooking: showBooking,
    showAllBooking: showAllBooking,
    edit_booking: edit_booking,
    booking: booking
}