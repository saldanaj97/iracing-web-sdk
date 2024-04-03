import { axiosMockPost } from './axiosMocks'

export const fetchAuthCookieMock = jest.fn(async ({ username, password }: { username: string; password: string }) => {
  if (username === 'sampleUsername' && password === 'samplePassword') {
    const response = await axiosMockPost('https://members-ng.iracing.com/auth', {
      username: 'sampleUsername',
      password: 'samplePassword',
    })
    return response.data
  } else {
    throw new Error('Invalid username or password')
  }
})

export const getCertainSeriesDataMock = jest.fn()
export const getSeriesDataMock = jest.fn()
export const getDetailedSeriesDataMock = jest.fn()
export const getListOfAllCarsMock = jest.fn()
export const getTrackDataMock = jest.fn()
export const writeDataToFileMock = jest.fn()