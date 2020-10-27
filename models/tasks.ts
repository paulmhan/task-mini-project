declare var global: any;


export default class Tasks {

    static async getTasks(ctx){
        const [data] = await global.db.query(
            'SELECT * FROM tasks'
        );
        return ctx.body = data;
        
    }

    static async getTaskById(ctx){
        let taskId = ctx.params.id;
        const [data] = await global.db.query(
            'SELECT * FROM tasks WHERE task_id = :taskId',
            {
                taskId
            }
        );
        return ctx.body = data;
    }

    static addTask(){
        
    }

}





//get all tasks
//get a task
//delete a task
//add a task