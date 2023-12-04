const SplitMail = (email) => {
  const parts = email.split("@");
  const usernamePart = parts[0];
  return usernamePart;
};

export default SplitMail;
