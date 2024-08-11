
const apiURL = "http://localhost:8000/api";


function select(name) {
    return document.querySelector(name);
  }
  
  let loginbtn = select("#loginbtn");
  loginbtn.addEventListener('click', async () => {
    let username = select("#username").value;
    let password = select("#password").value;
  
    if (!username || !password) {
      alert("Please fill in both fields.");
      return;
    }
  
    let dbun = `${apiURL}/GetAuthUser/${username}`;
  
    try {
      let response = await fetch(dbun, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        let result = await response.json();

        if (username === result[0].Username && password === result[0].Passwords) {
          localStorage.clear()
          localStorage.setItem("usn", username);
          alert("login Successfull")
          
        } else {
          alert("Username or password is incorrect.");
        }
      } else {
        alert("Something went wrong: " + response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Something went wrong, please try again later.");
    }
  });
  