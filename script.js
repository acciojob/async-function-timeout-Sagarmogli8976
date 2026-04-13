//your JS code here. If required.
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
const output = document.getElementById("output");

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function handleSubmit() {
  const text = textInput.value;
  const delay = Number(delayInput.value);

  output.innerText = "";

  await wait(delay);

  output.innerText = text;
}

button.addEventListener("click", handleSubmit);