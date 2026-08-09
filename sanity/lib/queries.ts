export const siteSettingsQuery = `
*[_type == "siteSettings"][0]{
  hero{
    title,
    subtitle,
    bio
  },
  contact{
    email,
    phone
  }
}
`;

export const galleryQuery = `
*[_type == "gallery"][0]{
  _id,
  images
}
`;

