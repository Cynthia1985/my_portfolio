
import { ContentfulClient } from 'react-contentful';

export const contentfulClient = new ContentfulClient({
    accessToken: process.env.REACT_APP_API_TOKEN,
    space: process.env.REACT_APP_SPACE_ID
});

export const getContentfulNav = async () => {
    const data = await contentfulClient.getEntry('ecYUl2mERrM4R4vWYci0Z');
    return data;
}

// getting the homepage and sections
export const getContentfulHomepage = async () => {
    const data = await contentfulClient.getEntry({ entryId: '7b4LjbPiZgJxxjEbA8Z0o7', include: 3 });
    return data;
}





