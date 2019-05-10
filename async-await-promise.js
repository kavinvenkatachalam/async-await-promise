/*******************************************************
 *             METHOD - 1 -> Using XHR                 *
 *******************************************************/
// Dummy User ID array
const arr = [1, 2, 3];

/*******************************************
 * Asynchronous function loops array data
 * and prints the response from the server
 */
const loopArr = async () => {
  for (let i = 0; i < arr.length; i++) {
    const response = await getValue(arr[i]);
    console.log(response);
  }
};

/*******************************************
 * Function gets user details from the server
 */
const getValue = data => {
  return new Promise((resolve, reject) => {
    const url = `https://reqres.in/api/users/${data}`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function() {
      const response = JSON.parse(this.responseText);
      if (this.status == 200) resolve(response);
      else reject(response);
    };
    xhr.send();
  });
};

// Function call - Completed will be printed once all the
// requests are fulfilled
loopArr()
  .then(() => {
    console.log("Completed");
  })
  .catch(error => {
    console.log(error);
  });

/*******************************************************
 *           METHOD - 2 -> Using Fetch                 *
 *******************************************************/
// Dummy User ID array
const arrTwo = [4, 5, 6];

/*******************************************************
 * Asynchronous function loops array data and prints the
 * response from the server
 */
const loopArrTwo = async () => {
  for (let i = 0; i < arrTwo.length; i++) {
    const response = await getValueTwo(arrTwo[i]);
    console.log(response);
  }
};

/*******************************************************
 * Function gets user details from the server
 */
const getValueTwo = data => {
  return new Promise((resolve, reject) => {
    const url = `https://reqres.in/api/users/${data}`;
    fetch(url)
      .then(response => response.json())
      .then(json => resolve(json));
  });
};

// Function call - Completed will be printed once all the
// requests are fulfilled
loopArrTwo()
  .then(() => {
    console.log("Completed Second Function");
  })
  .catch(error => {
    console.log(error);
  });
