const globalAny: any = global;

export class Tasks {

    static async getTasks(ctx) {
        const userID = ctx.request.jwtPayload.sub;
        console.log("userID", userID);
        const [tasks] = await globalAny.db.query(
            `SELECT * FROM tasks WHERE userID = :userID`,
            {
                userID
            }
        );
        ctx.body = tasks;
    }

    static async addTask(ctx) {
        const userID = ctx.request.jwtPayload.sub;
        let title = ctx.request.body.title;
        let description = ctx.request.body.description;
        let dueDate = ctx.request.body.dueDate;
        let subTasks = ctx.request.body.subTasks;
        let taskID = ctx.request.body.taskID;
        if (subTasks) {
            for (let sub of subTasks) {
                let name = sub.name
                await globalAny.db.query(
                    'INSERT INTO subTasks (title, taskID) VALUES (:name, :taskID)',
                    {
                        name,
                        taskID                        
                    }
                )
            }
        }
        const [data] = await globalAny.db.query(
            'INSERT INTO tasks (title, description, dueDate, userID) VALUES (:title, :description, :dueDate, :userID) ',
            {
                title,
                description,
                dueDate,
                userID
            }
        );
        return ctx.body = data;
    }

    static async deleteTask(ctx) {
        let taskID = ctx.params.id;
        const [data] = await globalAny.db.query(
            'DELETE FROM tasks WHERE taskID = :taskID',
            {
                taskID
            }
        );
        return ctx.body = data;
    }
};