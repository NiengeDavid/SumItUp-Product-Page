export const coverImage = `*[_type == "cover"] {
    name,
    image {
        asset -> {
          url
        }
    }
}`