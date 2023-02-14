import sanityclient from '@sanity/client';
import imageUrlBuilder from  '@sanity/image-url';

export const client = sanityclient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-02-08',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

