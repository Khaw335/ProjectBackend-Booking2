var http = require('http');
var url = require('url');


const {addHall,showHall,searchType,hall} = require('./hall.js');
const {addGuest,showGuest,guest} = require('./guest1');
const {showBooking,showAllBooking,booking} = require('./booking1');

http.createServer(function (req, res) {

    var require_path = url.parse(req.url, true);
    var message = '';
    var status = 200;
    var data = '';

    switch(require_path.pathname) {
        case '/addHall':
            try {
                let all_room = addHall(require_path.query.number, parseInt(require_path.query.price), 
                        require_path.query.type, require_path.query.description);
                message += `ได้เพิ่มห้อง ${require_path.query.number} เข้าสู่ระบบแล้ว`
                data = JSON.stringify(all_hall)
                showHall();
            }catch(err) {
                status = 400;
                message += (err)
                console.log(err);
            }
            break;
        case '/addGuest':
            try {
                let show = addGuest(require_path.query.firstname, require_path.query.lastname, parseInt(require_path.query.age),
                    require_path.query.phone_number, require_path.query.email)
                message += `The guest name ${require_path.query.firstname} ${require_path.query.lastname} has been added.`
                data += JSON.stringify(show);
                
            }catch (err) {
                status = 400;
                message += (err)
                console.log(err)
            }
            break;
        case '/searchType':
            try {
                let show = searchType(require_path.query.key)
                message += `found ${show[0]} item(s)`
                data += JSON.stringify(show[1])
            } catch (err) {
                status = 400;
                message += (err)
                console.log(err)
            }
            break;
        case '/showBooking':
            case '/showBooking':
            try {
                let show = showBooking(parseInt(require_path.query.id));
                message += 'success';
                data += JSON.stringify(show);
            } catch (err) {
                status = 400;
                message += (err);
                console.log(err);
            }
            break;
        case '/showAllBooking':
            try {
                let show = showAllBooking();
                message += 'success';
                data += JSON.stringify(show);
            } catch (err) {
                status = 400;
                message += (err);
                console.log(err);
            }
            break;
        case '/checkPeriod':
            try {
                let show = checkPeriod();
                message += 'เสร็จสิ้น';
                data += JSON.stringify(show);
            } catch (err) {
                status = 400;
                message += (err);
                console.log(err);
            }
            break;
        case '/checkPrice':
            try {
                let show = checkPrice();
                message += 'เสร็จสิ้น';
                data += JSON.stringify(show);
            } catch (err) {
                status = 400;
                message += (err);
                console.log(err);
            }
            break;
            default: 
                status = 404
                message = 'path not found!'
            break;
    }
   
    let response_objects = {
        status: status,
        message: message,
        data: data
    }

    res.writeHead(status, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(response_objects));


}).listen(8080);
console.log('Inventory system is running on port 8080.');