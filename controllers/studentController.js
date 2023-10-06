import StudnetModel from "../modules/Student.js";



class StudentController{


    // Data creation
    static createDoc=(req,res)=>{

        res.send('Data created....')
    }

    // Display data

    static getAllDoc=(req,res)=>{

        res.send('All docs...')
    }


    // Get single doc

    static getSingleDocById=(req,res)=>{

        res.send('Get single doc by id....')
    }


    // update doc by id

    static updateDocById=(req,res)=>{

        res.send('Update doc by id....')
    }

    // Delete doc by id

    static deleteDocById=(req,res)=>{

        res.send('delete doc by id....')
    }




}

export default StudentController;