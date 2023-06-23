import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: "3a3zvinb",
  dataset: "production",
  apiVersion: "2022-05-12",
  useCdn: true,
  token: process.env.SANITY_API_KEY
});

export const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
}

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);