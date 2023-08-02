import Users from '../models/Users.js'


export const getAllUsers = async (req,res)=>{  
    try{        
        const allUsers = await Users.find() ;
        res.json({
            success: true,
            users:allUsers
        })
    }
    catch(err){
        console.log(err) ;
    }
}


export const addUsers = async (req,res)=>{
    const {name, email, password} = req.body ;
    try{
        const NewUser = new Users({
            name,
            email,
            password
        })
       await NewUser.save() ;

        res.status(200).cookie("tempo","lol").json({message:"User Registered successfully",NewUser})
    }catch(err){
        console.log(err) ;
    }
}


export const oneUser =  async (req,res)=>{
    const { id } = req.params ;    

    const user = await Users.findById(id)

    res.json({
        success: true,
        user,
    })

}