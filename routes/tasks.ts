const globalAny:any = global;

module.exports = async (ctx) => {
    const userID = ctx.request.jwtPayload.sub;
    const [tasks] = await globalAny.db.query(
        `SELECT * FROM tasks WHERE userID = :userID`,
        {
            userID
        }
    );
    ctx.body = tasks;
  };