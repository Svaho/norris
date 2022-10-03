import axios from "axios";
const CHUCK_NORRIS_API = "https://api.chucknorris.io/jokes/random";

export const fetchFact = async () => {
  const chuckFact = await axios.get(CHUCK_NORRIS_API);
  console.log(chuckFact.data.value);
  return chuckFact;
};
