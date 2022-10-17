import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Kemal Can',
    email: 'kemalcan@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Alperen',
    email: 'alperen@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
