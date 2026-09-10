// ─── Contact / Offices ─────────────────────────────────────────────────────────

export type Office = {
  country: string
  type: string
  flag: string
  address: string
  email: string
  phone: string
  mapUrl?: string
}

export const offices: Office[] = [
  {
    country: "INDIA",
    type: "Headquarters",
    flag: "in",
    address: "1002, Neptune Edge, Sarabhai Campus, Vadodara – 390 007, Gujarat, India",
    email: "sales@tecunique.com",
    phone: "+91 915 746 0525",
    mapUrl: "https://maps.google.com/?q=1002,+Neptune+Edge,+Sarabhai+Campus,+Vadodara+%E2%80%93+390+007,+Gujarat,+India",
  },
  {
    country: "USA",
    type: "Sales Contact",
    flag: "us",
    address: "104 Bramble Bush Ln Victoria, Texas 77904",
    email: "sales@tecunique.com",
    phone: "+1 361 571 5589",
    mapUrl: "https://maps.google.com/?q=104+Bramble+Bush+Ln,+Victoria,+Texas+77904",
  },
  {
    country: "CANADA",
    type: "Sales Contact",
    flag: "ca",
    address: "102-213 Willis Crescent, Saskatoon - S7T 0L9",
    email: "sales@tecunique.com",
    phone: "+1 306 891 4647",
    mapUrl: "https://maps.google.com/?q=102-213+Willis+Crescent,+Saskatoon,+SK+S7T+0L9",
  },
  {
    country: "AUSTRALIA",
    type: "Sales Contact",
    flag: "au",
    address: "50 Grandeur Parade, Riverstone, NSW - 2765",
    email: "sales@tecunique.com",
    phone: "+61 421 826 596",
    mapUrl: "https://maps.google.com/?q=50+Grandeur+Parade,+Riverstone+NSW+2765",
  },
]
