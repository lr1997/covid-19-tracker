const url = "https://api.covid19api.com/";

export const fetchDataAsync = async (para) => {
  const response = await fetch(url + para);
  const data = await response.json();

  console.log("data in api");

  console.log(data);
  console.log("data in api");
  return data;
};
