// /api/getVariationsApi.js
import Fetcher from "../library/Fetcher";

export const GetHeader = async ({ data }) => {
  return Fetcher.get(`get`, data);
};




export default { GetHeader };
