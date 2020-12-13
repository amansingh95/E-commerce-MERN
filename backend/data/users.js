import bcrypt from "bcryptjs";

const user = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name: 'aman',
        email: 'amansingh10111995@gmail.com',
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: 'annu',
        email: 'annu@gmail.com',
        password: bcrypt.hashSync('123456',10),
    },

]

export default user