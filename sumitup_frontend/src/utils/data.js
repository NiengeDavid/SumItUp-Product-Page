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

export const headings = `*[_type == "sectionTitle" ] | order(_createdAt asc) {
  title,
  emoji
}`

export const testimonyFeed = `*[_type == "testimonial" ] | order(_createdAt asc) {
  image {
    asset -> {
        url
    }
  },
  testimony,
  name,
  title
}`

export const summary = `*[_type == "contentSummary" ] | order(_createdAt asc) {
  chapter,
  title,
  summary
}`

export const author = `*[_type == "author" ] {
  image {
    asset -> {
      url
    }
  },
  name,
  bio,
  about,
  info
}`

export const socials = `*[_type == "socials" ] | order(_createdAt asc) {
  media,
  icon,
  link
}`

export const countries = `*[_type == "countries" ] | order(_createdAt asc) {
  country,
  short,
  link
}`

export const footer = `*[_type == "footer" ] {
  countryin,
  countryout,
  reason,
  links,
  image {
    asset -> {
      url
    }
  },
}`