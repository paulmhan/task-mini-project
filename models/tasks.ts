declare var global: any;


export default class Tasks {

    static async getTasks(ctx){
        // ctx.body = "hello";
        // console.log("ssd")
        const [data] = await global.db.query(
            'SELECT * FROM tasks'
        );
        ctx.body = data;
        // pool.query('SELECT * FROM tasks', (err,res) => {
        //     if (err) throw err;
        //     console.log(res);
        //     return ctx.body = res;
        // })
    }

    static getTaskById(){

    }

    static addTask(){
        
    }

}





//get all tasks
//get a task
//delete a task
//add a task