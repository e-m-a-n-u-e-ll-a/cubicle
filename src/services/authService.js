let bcrypt = require('bcrypt');
let User = require('../models/User');
let saltRounds = 10;
exports.register = async ({ username, password, repeatPassword }) => {
    if (password !== repeatPassword) {
        return 
    }
    let hashedPass = await bcrypt.hash(password, saltRounds);
    let created = User.create({
        username,
        password: hashedPass
    });
   // User.create(userData);
   return created;
} 
