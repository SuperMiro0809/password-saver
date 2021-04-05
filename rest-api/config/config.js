const config = {
    port: 9000,
    dbConnectionString: "mongodb+srv://miro:zevs0809@cluster0.0lorf.mongodb.net/main?retryWrites=true&w=majority",
    authCookieName: "auth_cookie",
    authHeaderName: "auth",
    jwtSecret: "secret",
    saltRounds: 10,
    origin: ['http://localhost:3000'],
}

module.exports = config;