function select(name) {
  return document.querySelector(name);
}

const apiURL = "http://localhost:8000/api/";
let addauthuser = "AddAuthUser/";

let element = select("#regbtn");
element.addEventListener('click', async () => {
  let email = select("#email").value;
  let password = select("#password").value;
  let username = select("#username").value;
  let confirmpassword = select("#confirm_password").value;

  if (password !== confirmpassword) {
    alert("Passwords do not match");
  } else {
    let finalquery = `${apiURL}${addauthuser}?Email_id=${email}&Username=${username}&Passwords=${confirmpassword}`;

    try {
      let response = await fetch(finalquery, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        alert("Data inserted successfully :)");
      } else {
        let errorData = await response.json();
        alert(`Something went wrong: ${errorData.detail}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Something went wrong, please try again later.");
    }
  }
});

// -------------------------------------------------

