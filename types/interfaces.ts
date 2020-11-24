export interface InterfacePositionCoordinates {
  x: number
  y: number
}
export interface InterfaceTvShowCountry {
  name: string
  code: string
  timezone: string
}

export interface InterfaceTvShowSchedule {
  time: string
  days: string[]
}

export interface InterfaceTvShowRating {
  average: number | null
}

export interface InterfaceTvShowNetwork {
  id: number
  name: string
  country: InterfaceTvShowCountry
}

export interface InterfaceTvShowExternals {
  tvrage: number | null
  thetvdb: number | null
  imdb: string | null
}

export interface InterfaceTvShowImage {
  medium: string
  original: string
}

export interface InterfaceTvLink {
  href: string
}

export interface InterfaceTvShowCastLink {
  self: InterfaceTvLink
}

export interface InterfaceTvLinks {
  self: InterfaceTvLink
  nextepisode?: InterfaceTvLink
  previousepisode?: InterfaceTvLink
}

export interface InterfaceTvShowPerson {
  id: number
  url: string
  name: string
  country: InterfaceTvShowCountry
  code?: string
  timezone?: string
  birthday: string
  deathday: string | null
  gender: string
  image: InterfaceTvShowImage
  _links: InterfaceTvShowCastLink
}

export interface InterfaceTvShowCharacter {
  id: number
  url: string
  name: string
  image: InterfaceTvShowImage
  _links: InterfaceTvShowCastLink
}

export interface InterfaceTvShowCast {
  self: boolean
  voice: boolean
  person: InterfaceTvShowPerson
  character: InterfaceTvShowCharacter
}

export interface InterfaceTvShowEmbedded {
  cast: InterfaceTvShowCast[]
}

export interface InterfaceTvShow {
  id: number
  url: string
  name: string
  type: string
  language: string
  genres: string[]
  status: string
  runtime: number
  premiered: string
  officialSite: string | null
  weight: number
  summary: string
  updated: number
  webChannel: string | null
  schedule: InterfaceTvShowSchedule
  rating: InterfaceTvShowRating
  network: InterfaceTvShowNetwork
  externals: InterfaceTvShowExternals
  image?: InterfaceTvShowImage
  _links: InterfaceTvLinks
  _embedded: InterfaceTvShowEmbedded
}

export interface InterfaceTvSchedule {
  id: number
  url: string
  name: string
  season: number
  type: string
  airdate: string
  airtime: string
  airstamp: string
  runtime: number
  summary: string
  image?: string
  show: InterfaceTvShow
}
