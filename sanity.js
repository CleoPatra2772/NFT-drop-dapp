import { createCurrentUserHook, createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const config={
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2021-3-25',
    useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config);

//helper function for generating image urls with only the asset reference data in your documents
export const urlFor = (source) => createImageUrlBuilder(config).image(source)