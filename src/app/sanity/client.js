import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Sanity client configuration
const client = createClient({
  projectId: "t4zdycmt",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-01-01",
});


const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export default client;
