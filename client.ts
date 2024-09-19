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
  const data = await getData(query);
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
    "secondImage": secondImage.asset->url,
    "thirdImage": thirdImage.asset->url,
    "fourthImage": fourthImage.asset->url,
    youtubeLink,
    characteristics,
    "authorImage": authorImage.asset->url,
    "crop": mainImage.crop,
    "hotSpot": mainImage.hotspot,
    author,
    contenido,
    instructions,
    ingredients,
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

export const suscription = client
  .listen('*[_type == "dairies"]', { notificationSent: "notificationSent" })
  .subscribe((update) => {
    const coment = update.result?._id;
    console.log("resultado:", coment);
    console.log("email sent");
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
