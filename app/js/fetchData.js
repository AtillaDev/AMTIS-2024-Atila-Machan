async function giveAdvice() {
  await fetch(`"https://reqres.in/api/users/"`)
    .then((res) => {
      if (!res.ok) {
        console.log("Error connecting to API");
        return;
      }
      //   console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      document.querySelector("#adviceText").innerHTML = `${data.slip.advice}`;
    });
}

giveAdvice();
