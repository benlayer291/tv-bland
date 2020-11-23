import axios from 'axios'

import { InterfaceTvSchedule, InterfaceTvShow } from '../types/interfaces'

const axiosClient = axios.create({
  baseURL: 'https://api.tvmaze.com/',
})

export const fetchSchedule = async (
  date?: string
): Promise<InterfaceTvSchedule[]> => {
  const url = date ? `schedule?country=GBdate=${date}` : `schedule?country=GB`
  const { data } = await axiosClient({
    url,
    method: 'GET',
  }).catch((e) => {
    console.error(e)

    return { data: null }
  })

  return data
}

export const fetchShow = async (id: string): Promise<InterfaceTvShow> => {
  const url = `shows/${id}?embed=cast`
  const { data } = await axiosClient({
    url,
    method: 'GET',
  }).catch((e) => {
    console.error(e)

    return { data: null }
  })

  return data
}
