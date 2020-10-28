declare var global: any;

export default class User {
    static async getUserById(ctx){
        let userID = ctx.params.id;
        const [data] = await global.db.query(
            'SELECT * FROM user WHERE userID = :userID',
            {
                userID
            }
        );
        return ctx.body = data;
    }
}