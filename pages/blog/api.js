import axios from "axios";

const strapi_base_url = "https://kollboratecms.herokuapp.com";
const get_all_blogs_api_path = "/api/blogs";
const urlAxios = strapi_base_url + get_all_blogs_api_path;

export const getBlogs = async () => {
  const result = await axios.get(urlAxios, {
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_DEV,
    },
  });
  return result;
};


//adding this default component just to colocate this file. can move out too
export default function Api(){
    return <></>
}