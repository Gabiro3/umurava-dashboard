export interface Job {
    id: string
    company: {
      name: string
      logo: string
      location: string
    }
    title: string
    description: string
    type: string
    postedAt: string
    tags: string[]
    workType: "Hybrid" | "Remote" | "On-site"
    status: "Applied" | "Open"
  }
  