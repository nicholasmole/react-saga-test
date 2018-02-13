export const fetchData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();
    return data;
  } catch(e) {
    console.log(e);
  }
}
// data here is based back to saga