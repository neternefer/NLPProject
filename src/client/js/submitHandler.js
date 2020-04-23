const submitHandler = async(e) => {
    e.preventDefault();
    const userInput = document.getElementById("user-input").value;
    if (!userInput) return;
    const dataObject = Client.checkUrl(userInput);
    fetch("http://localhost:5000/sentiment", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataObject)
    })
      .then(res => res.json())
      .then(data => {
        const values = ['polarity', 'subjectivity', 'polarity_confidence', 'subjectivity_confidence'];
        values.forEach((value) => {
          document.getElementById(value).innerHTML = data[value];
        })
      });
  }

  export { submitHandler };
