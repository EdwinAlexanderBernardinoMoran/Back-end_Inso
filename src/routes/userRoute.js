const router = require('express').Router();
const validatorHandler = require('../../middlewares/validatorHandler');
const UserService = require('../services/userService');
const { 
    creatUser,
    getUserSchema
} = require('../schemas/userSchema');

const userService = new UserService();

router.get('/', async(req, res, next)=>{
    try {
        const users = await userService.find();
        res.json(users)
    } catch (error) {
        next(error)
    }
})

router.get('/:id',
    validatorHandler(getUserSchema, 'params'),
    async(req, res, next)=>{
    const {id} = req.params;
    try {
        const users = await userService.findOne(id);
        res.json(users)
    } catch (error) {
        next(error)
    }
})

router.post('/', 
    validatorHandler(creatUser, 'body'),
    async(req, res, next)=>{
        try {
            const { email, password } = req.body;
            console.log(req.body);

            const newUser = await userService.create({email, password});
            res.status(201).json(newUser);
        } catch (error) {
            next(error)
        }
    }
)

module.exports = router;