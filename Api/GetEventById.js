import Fetcher from "../library/Fetcher";

export const GetPage = async (id) => {
  return Fetcher.get(`event/${id}`);
};

export default GetEventById;
