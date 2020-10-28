declare var global: any;



export default class Tasks {

    static async getTasks(ctx){
        const [data] = await global.db.query(
            'SELECT * FROM tasks'
        );
        return ctx.body = data;
        
    }

    static async getTaskById(ctx){
        let taskID = ctx.params.id;
        const [data] = await global.db.query(
            'SELECT * FROM tasks WHERE taskID = :taskID',
            {
                taskID
            }
        );
        return ctx.body = data;
    }

    static async addTask(ctx){
        console.log(ctx.request.body);
        let title = ctx.request.body.title;
        let description = ctx.request.body.description;
        let dueDate = ctx.request.body.dueDate;
        const [data] = await global.db.query(
            'INSERT INTO tasks (title, description, dueDate, userID) VALUES (:title, :description, :dueDate, 1) ',
            {
                title,
                description,
                dueDate
            }
        );
        return ctx.body = data;

    }
    
    static async deleteTaskById(ctx){
        let taskID = ctx.params.id;
        const [data] = await global.db.query(
            'DELETE FROM tasks WHERE taskID = :taskID',
            {
                taskID
            }
        );
        return ctx.body = data;
    }
}





//get all tasks
//get a task
//delete a task
//add a task