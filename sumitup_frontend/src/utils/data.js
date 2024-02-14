export const coverImage = `*[_type == "cover"] {
    name,
    image {
        asset -> {
          url
        }
    }
}`;

export const buttons = `*[_type == "buy" && name match "online"] | order(_createdAt desc) {
  name,
  link,
  image {
    asset -> {
        url
    }
  },
  color,
  alt
}`;

export const benue = `*[_type == "buy" && name match "benue"] | order(_createdAt desc) {
  name,
  link,
  image {
    asset -> {
        url
    }
  },
  color,
  alt
}`;

export const abuja = `*[_type == "buy" && name match "abuja"] | order(_createdAt desc) {
  name,
  link,
  image {
    asset -> {
        url
    }
  },
  color,
  alt
}`;

export const jos = `*[_type == "buy" && name match "jos"] | order(_createdAt desc) {
  name,
  link,
  image {
    asset -> {
        url
    }
  },
  color,
  alt
}`;

export const intro = `*[_type == "bookslug" ] {
  firstpart,
  greenpart,
  secondpart,
  redpart
}`;

export const overview = `*[_type == "overview" ] {
  p1,
  p2,
  p3,
  red
}`;

export const content = `*[_type == "content" ] {
  title,
  video,
  content_title,
  ending_slug
}`;

export const learn =  `*[_type == "learn" ] | order(_createdAt asc) {
  number,
  learn
}`