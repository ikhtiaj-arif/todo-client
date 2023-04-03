export const setAuthToken = (userData) => {
    // https://server-angon777.vercel.app
    // save user in db and get token
    fetch(`http://localhost:5000/users/${userData?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // save token to local storage
        localStorage.setItem("todo-user-token", data.token);
      });
  };
  
// get user 
  export const getUserInfo = async (email) => {
    const url = `http://localhost:5000/users/${email}`;
    const res = await fetch(url, {
      headers: {
        authorization: `bearer ${localStorage.getItem("todo-user-token")}`,
      },
    });
    const data = await res.json();
  
    return data;
  };
  