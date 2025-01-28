import { registerModel } from "../modules/registerModel.mjs";


const registerController = {
    postUsers: async (req, res) => {
            const{username, email, password, role} = req.body;

        try {
            const checkUser = await registerModel.checkUser(email);
            
            if(checkUser === 1){
                return res.status(409).json({status: 'err', msg: "User with this email already exist"
                })
            };
            
            const createUser = await registerModel.createNewUser(username, email, password, role);

            if(createUser === 0){
               return res.status(406).json({status: 'err', msg: "User not created"})
            };

            res.status(200).json({status: 'ok', msg: 'User created successfully'})
        } catch (error) {
            console.error(error);
        }
    }
    
}



export{ registerController }

