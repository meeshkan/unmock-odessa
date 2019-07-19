import axios from "axios";

export const bla = async () => {
  const result = await axios.get("https://api.unmock.io");
  return result;
};
