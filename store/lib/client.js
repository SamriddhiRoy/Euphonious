import sanityCLient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityCLient({
    projectId :'kyd4072m',
    dataset :'production',
    apiVersion :'2022-10-20',
    useCdm :true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (sorce) => builder.image(sorce);