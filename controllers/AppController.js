
const {User_Model} = require('../models');

const AppController = {

    async get_users(request, response){
      try {
        const users = await User_Model.find({});
        return response.code(200).header('Content-Type', 'application/json; charset=utf-8').send({ type: "success", message : users });
      } catch (error) {
        return response.code(400).header('Content-Type', 'application/json; charset=utf-8').send({ type: "error", message : error });
      }

    },

    async get_user(request, response){
      const id = request.params.id;
      try {
        const user = await User_Model.findById(id);
        return response.code(200).header('Content-Type', 'application/json; charset=utf-8').send({ type: "success", message : user });
      } catch (error) {
        return response.code(400).header('Content-Type', 'application/json; charset=utf-8').send({ type: "error", message : error });
      }
    },
    
    async add_user(request, response){
      
      const {body} = request;
      
      let User = new User_Model({
        'name'    : body.name,
        'email'   : body.email,
        'phone'   : body.phone
      });

      try {
        await User.save();
        return response.code(200).header('Content-Type', 'application/json; charset=utf-8').send({ type: "success", message : 'User has been added successfully' });
      } catch (error) {
        return response.code(400).header('Content-Type', 'application/json; charset=utf-8').send({ type: "error", message : error });
      }
    },

    async update_user(request, response){      
      try {
        const {body} = request;
        const id = request.params.id;
        await User_Model.findByIdAndUpdate(id,{
          'name'    : body.name,
          'email'   : body.email,
          'phone'   : body.phone
        },{new: true, useFindAndModify : false });
        return response.code(200).header('Content-Type', 'application/json; charset=utf-8').send({ type: "success", message : 'User has been updated successfully' });
      } catch (error) {
        return response.code(400).header('Content-Type', 'application/json; charset=utf-8').send({ type: "error", message : error });
      }
    },

    async delete_user(request, response){
      try {
        const id = request.params.id;
        await User_Model.findByIdAndDelete(id);
        return response.code(200).header('Content-Type', 'application/json; charset=utf-8').send({ type: "success", message : 'User has been deleted successfully' });
      } catch (error) {
        return response.code(400).header('Content-Type', 'application/json; charset=utf-8').send({ type: "error", message : error });
      }
    }


}

module.exports = AppController;