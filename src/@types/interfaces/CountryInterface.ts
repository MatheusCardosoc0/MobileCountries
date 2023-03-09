export interface Country{
  name: {
    common: string
    official: string
  },
  independent: boolean
  capital: string[]
  region: string
  subregion: string
  languages: {
    [language: string]: string
  } 
  population: number
  continents: string[]
  maps: {
    googleMaps: string
  }
  flags: {
    png: string
  }
}