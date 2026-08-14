// ─── Contact / Offices ─────────────────────────────────────────────────────────

export type Office = {
  country: string
  type: string
  flag: string
  address: string
  email: string
  phone: string
}

export const offices: Office[] = [
  {
    country: "INDIA",
    type: "Headquarters",
    flag: "in",
    address: "1002, Neptune Edge, Sarabhai Campus, Vadodara – 390 007, Gujarat, India",
    email: "sales@tecunique.com",
    phone: "+91 915 746 0525",
  },
  {
    country: "USA",
    type: "Sales Contact",
    flag: "us",
    address: "104 Bramble Bush Ln Victoria, Texas 77904",
    email: "sales@tecunique.com",
    phone: "+1 361 571 5589",
  },
  {
    country: "CANADA",
    type: "Sales Contact",
    flag: "ca",
    address: "102-213 Willis Crescent, Saskatoon - S7T 0L9",
    email: "sales@tecunique.com",
    phone: "+1 306 891 4647",
  },
  {
    country: "AUSTRALIA",
    type: "Sales Contact",
    flag: "au",
    address: "50 Grandeur Parade, Riverstone, NSW - 2765",
    email: "sales@tecunique.com",
    phone: "+61 421 826 596",
  },
]
