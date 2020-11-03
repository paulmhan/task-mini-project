declare var global: any;

export default class Users {

    static async getUsers(ctx) {
        const [data] = await global.db.query(
            'SELECT * FROM users'
        );
        return ctx.body = data;
    }

    static async getUserById(ctx) {
        console.log(ctx.request.body);
        let userID = ctx.params.id;
        const [data] = await global.db.query(
            'SELECT * FROM users WHERE userID = :userID',
            {
                userID
            }
        );
        return ctx.body = data;
    }

    static async findUserByEmail(ctx) {
        console.log(ctx.request.body)
        let email = ctx.request.body.email;
        const [data] = await global.db.query(
            `SELECT * FROM users WHERE email = :email`,
            {
                email
            }
        );
        return data;
    }
}