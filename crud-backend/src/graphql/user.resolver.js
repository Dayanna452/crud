const UserService = require("../services/user.service");
const service = new UserService();

const getUser =  (_, { id }) => {
  return service.findOne(id);
};

const getUsers = () => {
  return service.find({});
};

const addUser =  (_, {dto}) => {
  return service.create(dto);

};

const updateUser = (_, {id,dto}) => {
  return service.update(id, dto);
};

const deleteUser = async (_,{id}) => {
  const user = await service.delete(id);
  return user;
};

module.exports = { getUser, getUsers, addUser, updateUser, deleteUser };
