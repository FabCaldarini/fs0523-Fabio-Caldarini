const auth =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxNDQyY2NlZTJlMjAwMThkY2JmNTMiLCJpYXQiOjE2OTk4MjQ2ODQsImV4cCI6MTcwMTAzNDI4NH0.AUHokTpUoSFLXeMT0J4cEBefkrrQEZnWgvGCnOgDkDM";
const url = "https://striveschool-api.herokuapp.com/api/product/";

async function fetchcontent() {
  const dataFetch = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth,
      },
    }
  );
  const data = await dataFetch.json();

  console.log(data);
}

async function postData(
  productName,
  productManufacturer,
  productDescription,
  productImage,
  productPrice
) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      name: productName,
      description: productDescription,
      brand: productManufacturer,
      imageUrl: productImage,
      price: productPrice,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: auth,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const contentData = await response.json();
  console.log(contentData);
}

const form = document.getElementById("form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const productName = document.querySelector("#productName").value;
  const productDescription = document.querySelector(
    "#productDescription"
  ).value;
  const productManufacturer = document.querySelector(
    "#productManufacturer"
  ).value;
  const productImage = document.querySelector("#productImage").value;
  const productPrice = document.querySelector("#productPrice").value;

  console.log(
    productName,
    productDescription,
    productManufacturer,
    productImage,
    productPrice
  );

  try {
    await postData(
      productName,
      productDescription,
      productManufacturer,
      productImage,
      productPrice
    );
  } catch (error) {
    console.error("Error:", error.message);
  }
});
