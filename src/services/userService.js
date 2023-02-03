const boom = require('@hapi/boom');
const { models } = require('../../lib/sequelize');

class UserService {

    constructor(){};

    async find(){
        const data = await models.User.findAll();
        return data;        
    }

    async findOne(id){
        const user = await models.User.findByPk(id);
        if (!user) {
            throw boom.notFound("user not found")
        }
        return user;
    }

    async create(user){
        const res = await models.User.create(user)
        return res;
    }

    async update(user){
        const userId = await this.findOne(user.id);
        const res = await userId.update(data);
        return res;
    }
}

module.exports = UserService;