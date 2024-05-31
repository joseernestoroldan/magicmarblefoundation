import { createClient, groq } from "next-sanity";

const projectId = process.env.API_ID;
const dataset = "production"; // "production"
const apiVersion = "2023-05-03";
const token = process.env.API_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

const getData = async (query: string) => {
  const data = await client.fetch(query);
  return data;
};

export const getAllData = async (myquery: string) => {
  const query = groq`*[_type == '${myquery}']{
        _id,
        publishedAt,
        title,
        description,
        "mainImage": mainImage.asset->url,
        "authorImage": authorImage.asset->url,
        author,
        body,
        contenido,
        alt,
  }`;

  const data = await getData(query);
  return data;
};

export const getOne= async (myquery: string) => {
  const query = groq`*[_id == '${myquery}']{
    _id,
    publishedAt,
    title,
    description,
    "mainImage": mainImage.asset->url,
    "authorImage": authorImage.asset->url,
    author,
    contenido,
}`;
const data = await getData(query);
return data;

} 
