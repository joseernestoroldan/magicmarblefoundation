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
  const query = groq`*[_type == '${myquery}'] | order(_publishedAt desc){
        _id,
        publishedAt,
        title,
        description,
        "mainImage": mainImage.asset->url,
        "authorImage": authorImage.asset->url,
        "crop": mainImage.crop,
        "hotSpot": mainImage.hotspot,
        author,
        body,
        contenido,
        alt,
        _createdAt,
        name,
  }`;

  const data = await getData(query);
  return data;
};

export const getOne = async (myquery: string) => {
  const query = groq`*[_id == '${myquery}']{
    _id,
    publishedAt,
    title,
    description,
    "mainImage": mainImage.asset->url,
    "authorImage": authorImage.asset->url,
    "crop": mainImage.crop,
    "hotSpot": mainImage.hotspot,
    author,
    contenido,
    _createdAt,
}`;
  const data = await getData(query);
  return data;
};

export const getOrderedData = async (myquery: string, number: string) => {
  const query = groq`*[_type == '${myquery}'] | order(publishedAt desc)[0..${number}]{
    _id,
    publishedAt,
    title,
    description,
    "mainImage": mainImage.asset->url,
    "authorImage": authorImage.asset->url,
    author,
    contenido,
    _createdAt,
}`;
  const data = await getData(query);
  return data;
};

export const getAllFiltter = async (myquery: string, parametro: string) => {
  const query = groq`*[_type == '${myquery}' && category == '${parametro}'] | order(_createdAt asc){
    _id,
    name,
    post,
    body,
    "mainImage": mainImage.asset->url,
    email,
    _createdAt,
    category,
}`;
  const data = await getData(query);
  return data;
};
