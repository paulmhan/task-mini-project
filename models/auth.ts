declare var global: any;

export default class Users {

    static async getUsers(ctx){
        const [data] = await global.db.query(
            'SELECT * FROM users'
        );
        return ctx.body = data;
        
    }

    static async getUserById(ctx){
        let userID = ctx.params.id;
        const [data] = await global.db.query(
            'SELECT * FROM users WHERE userID = :userID',
            {
                userID
            }
        );
        return ctx.body = data;
    }

    static async getUserByName(ctx){
        let email = ctx.params.name
        const [data] = await global.db.query(
            `SELECT * FROM users WHERE email = :email`,
            {
                email
            }
        );
        return ctx.body = data;
    }
}