import axios from "axios";

const ENDPOINT = "https://api.foo.com/hello";

export default async () => {
  const { data } = await axios(ENDPOINT);
  return data;
};
