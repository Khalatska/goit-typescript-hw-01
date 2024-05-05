type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  // Update user logic here
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
