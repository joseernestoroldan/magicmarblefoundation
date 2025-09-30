import { createClient, groq } from "next-sanity";
import { QueryType } from "./types/types";

const projectId = process.env.API_ID;
const dataset = "production"; // "production"
const apiVersion = "2023-05-03";
const token = process.env.API_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token,
});

const getData: (query: string) => Promise<QueryType[]> = async (query: string) => {
  try {
    const data = await client.fetch(query);
    if (data.length === 0) return null;
    return data;
  } catch (error: unknown) {
    const err = error as Error;
    // Handle Sanity client errors or network issues
    console.error("Failed to fetch data from Sanity:", err.message);
    // Option 1: Rethrow a custom error with context
    throw new Error(`Sanity query failed: ${query}. ${err.message}`);
    // Option 2: Return fallback data (if error should be non-blocking)
    // return { error: true, message: "Data fetch failed", details: error.message };
  }
};

export const getAllByTop = async () => {
  const query = groq`*[_type == 'portalPaddyField' && topPick == true] | order(_publishedAt desc){
  _id,
  publishedAt,
  title,
  description,
  "mainImage": mainImage.asset->url,
  "crop": mainImage.crop,
  "hotSpot": mainImage.hotspot,
  }`;
  const data: QueryType[] | null = await getData(query);
  return data;
};

export const getAllData = async (myquery: string) => {
  const query = groq`*[_type == '${myquery}'] | order(_createdAt desc){
        _id,
        publishedAt,
        title,
        chimpLink,
        description,
        characteristics,
        youtubeLink,
        "mainImage": mainImage.asset->url,
        "secondImage": secondImage.asset->url,
        "thirdImage": thirdImage.asset->url,
        "fourthImage": fourthImage.asset->url,
        "authorImage": authorImage.asset->url,
        "crop": mainImage.crop,
        "hotSpot": mainImage.hotspot,
        author,
        body,
        contenido,
        alt,
        _createdAt,
        name,
        notificationSent,
        notificationsSent
  }`;

  const data: QueryType[] | null = await getData(query);
  return data;
};

export const getOne = async (myquery: string) => {
  const query = groq`*[_id == '${myquery}']{
    _id,
    publishedAt,
    title,
    description,
    "mainImage": mainImage.asset->url,
    "secondImage": secondImage.asset->url,
    "thirdImage": thirdImage.asset->url,
    "fourthImage": fourthImage.asset->url,
    youtubeLink,
    characteristics,
    "authorImage": authorImage.asset->url,
    "crop": mainImage.crop,
    "hotSpotMain": mainImage.hotspot,
    "hotSpotSecond": secondImage.hotspot,
    "hotSpotThird": thirdImage.hotspot,
    "hotSpotFourth": fourthImage.hotspot,
    author,
    contenido,
    instructions,
    ingredients,
    _createdAt,
}`;
  const data: QueryType[] | null = await getData(query);
  const [result] = data || [];
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
    "hotSpotMain": mainImage.hotspot,
}`;
  const data: QueryType[] | null = await getData(query);
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
  const data: QueryType[] | null = await getData(query);
  return data;
};

export const suscription = client
  .listen('*[_type == "dairies"]', { notificationSent: "notificationSent" })
  .subscribe((update) => {
    const coment = update.result?._id;
    console.log("resultado:", coment);
    console.log("Document update performed");
  });

export const UpdateSuscriptionStatus = async (
  documentId: string,
  numberNotifications: number
) => {
  await client
    .patch(documentId)
    .set({ notificationSent: true, notificationsSent: numberNotifications + 1 })
    .commit();
};
