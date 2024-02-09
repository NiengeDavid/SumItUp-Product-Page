export const coverImage = `*[_type == "cover"] {
    name,
    image {
        asset -> {
          url
        }
    }
}`;

export const buttons = `*[_type == "buy"] | order(_createdAt desc) {
  name,
  link,
  image {
    asset -> {
        url
    }
  }
}`;
