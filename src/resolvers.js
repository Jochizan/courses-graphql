import { TASKS } from './sample';
import User from './models/User';

export const resolvers = {
  Query: {
    hello: () => 'Hello World with Graphql',
    greet: (root, { name }, ctx) => {
      console.log(ctx);
      return `Hello ${name}`;
    },
    tasks: () => TASKS,
    users: async () => await User.find({})
  },
  Mutation: {
    createTask: (_, { input }) => {
      input._id = TASKS.length;
      TASKS.push(input);
      return input;
    },
    createUser: async (_, { input }) => {
      const newUser = await new User(input);
      await newUser.save();
      return newUser;
    },
    deleteUser: async (_, { _id }) => await User.findByIdAndDelete(_id),
    updateUser: async (_, { _id, input }) =>
      await User.findByIdAndUpdate(_id, input, { new: true })
  }
};
