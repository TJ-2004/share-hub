export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== undefined
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();
    //   console.log(userInfo.sub);
  return userInfo;
};
