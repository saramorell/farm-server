module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/b_farms'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/b_farms'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}
