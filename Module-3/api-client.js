const getData = async () => {
  try {
    let response = await fetch(
      "https://wincacademydatabase.firebaseio.com/Bennie/Tasks.json",
      {
        method: "GET",
      }
    );
    response = await response.json();
    const tasks = Object.keys(response).map(key => ({
      id: key,
      description: response[key].description,
      time: response[key].time,
      done: response[key].done,
    }));
    return tasks;
  } catch (error) {
    console.log(error);
  }
};

const postData = async item => {
  try {
    const response = await fetch(
      "https://wincacademydatabase.firebaseio.com/Bennie/Tasks.json",
      {
        method: "POST",
        body: JSON.stringify({
          description: item,
          time: new Date().toLocaleDateString(),
          done: false,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const putData = async (id, Description, status) => {
  if (status) {
    try {
      const response = await fetch(
        `https://wincacademydatabase.firebaseio.com/Bennie/Tasks/${id}/done.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: true,
        }
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const response = await fetch(
        `https://wincacademydatabase.firebaseio.com/Bennie/Tasks/${id}/description.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Description),
        }
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
};

const deleteData = async event => {
  try {
    const response = await fetch(
      `https://wincacademydatabase.firebaseio.com/Bennie/Tasks/${event}.json`,
      {
        method: "DELETE",
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
