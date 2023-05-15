const userModel = require("./models/user");

module.exports = initData = async () => {
  const users = await userModel.find({});
  if (!users.length) {
    await userModel.create([
      { name: "test1", age: 8 },
      { name: "test2", age: 18 },
      { name: "test3", age: 28 },
      { name: "test4", age: 38 },
      { name: "test5", age: 48 },
      { name: "test6", age: 58, email: "tttt@qq.com" },
      { name: "test7", age: 68, email: "ssss@qq.com" },
      { name: "test8", age: 18 },
      { name: "test9", age: 18, email: "rrrr@qq.com" },
      { name: "test10", age: 18 },
    ]);
  }
};
