// /api/getVariationsApi.js
import Fetcher from "../library/Fetcher";

export const GetHomePageApi = async ({ data }) => {
  return Fetcher.get("/", data);
};




export default { GetHomePageApi };
