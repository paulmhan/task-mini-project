const globalAny:any = global;

module.exports = async (ctx) => {
    const userID = ctx.request.jwtPayload.sub;
    console.log("userID", userID);
    const [tasks] = await globalAny.db.query(
        `SELECT * FROM tasks WHERE userID = :userID`,
        {
            userID
        }
    );
    ctx.body = tasks;
  };