import StudentModel from "../modules/Student.js";

class StudentController {
  // Data creation
  static createDoc = async (req, res) => {

    try{

        const {name,age,fees}=req.body

        const doc=new StudentModel({
            name:name,
            age:age,
            fees:fees
        })

        const result= await doc.save()
        res.status(201).send(result)

    }
    catch(err){
        console.log(err)
    }
    
    
  };

  // Display all data

  static getAllDoc = async (req, res) => {
    try {
      const result = await StudentModel.find();
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };

  // Get single doc by id

  static getSingleDocById = async (req, res) => {

    try {
      const result = await StudentModel.findById(req.params.id);
      res.send(result);
    } catch (err) {
      console.log(err);
    }
   
  };

  // update doc by id

  static updateDocById = async(req, res) => {

    try{
         const result = await StudentModel.findByIdAndUpdate(req.params.id,req.body);
         res.send(result)

    }catch(err){
        console.log(err)
    }
    
  };



  // Delete doc by id

  static deleteDocById = async(req, res) => {
    try {
        const result= await StudentModel.findByIdAndDelete(req.params.id)
        res.status(204).send(result)
        
    } catch (error) {
        console.log(error)
        
    }
  };
}

export default StudentController;
