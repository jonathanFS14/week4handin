
    const fetchButton = document.getElementById("getUser");
    const userIdInput = document.getElementById("userId");
    const userDataDiv = document.getElementById("userData");

    const getAllButton = document.getElementById("getAllButton");
    const userTableBody = document.getElementById("userTableBody");

    fetchButton.addEventListener("click", () => {
        const userId = userIdInput.value;
        userTableBody.innerHTML = "";
        const url = "https://jsonplaceholder.typicode.com/users" + "/" + userId;
        fetch(url)
            .then((res) => res.json())
            .then( user => { 
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${user.name}</td>
                        <td>${user.phone}</td>
                    `;
                    userTableBody.appendChild(row);
                });
            })
            

    getAllButton.addEventListener("click", () => {
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                data.forEach((user) => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${user.name}</td>
                        <td>${user.phone}</td>
                    `;
                    userTableBody.appendChild(row);
                });
            })
            .catch((error) => {
                console.error("Error fetching all users:", error);
            });
    });

