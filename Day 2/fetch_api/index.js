

async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    const userList = document.getElementById("userList");
    userList.innerHTML = "";

    data.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} : ${user.email}`;
      userList.append(li); 
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
