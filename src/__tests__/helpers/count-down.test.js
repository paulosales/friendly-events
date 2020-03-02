/**
* Copyright (c) 2020-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

import countDown from '../../helpers/count-down'

describe('CountDown utilitary', () => {
  const realDate = Date.now
  const targetDate = new Date(1980, 0, 27, 18, 30, 20)
  
  afterEach(() => {
    global.Date.now = realDate
  })

  describe('with passed more than one day from the target date', () => {
    it('should return 0 day, 0 hours, 0, minutes, 0 seconds', () => {
      global.Date.now = jest.fn(() => new Date(1980, 0, 28, 18, 30, 21).getTime())
      const cd = countDown(targetDate)
      expect(cd).toEqual({days: 0, hours: 0, minutes: 0, seconds: 0})
    })
  })
  
  describe('with passed less than one day from the target date', () => {
    it('should return 0 day, 0 hours, 0, minutes, 0 seconds', () => {
      global.Date.now = jest.fn(() => new Date(1980, 0, 28, 18, 30, 19).getTime())
      const cd = countDown(targetDate)
      expect(cd).toEqual({days: 0, hours: 0, minutes: 0, seconds: 0})
    })
  })

  describe('with resting one day to the target date', () => {
    it('should return 1 day', () => {
      global.Date.now = jest.fn(() => new Date(1980, 0, 26, 18, 30, 20).getTime())
      const cd = countDown(targetDate)
      expect(cd).toEqual({days: 1, hours: 0, minutes: 0, seconds: 0})
    })
  })

  describe('with resting one day to the target date', () => {
    it('should return 1 day', () => {
      global.Date.now = jest.fn(() => new Date(1980, 0, 27, 18, 30, 19).getTime())
      const cd = countDown(targetDate)
      expect(cd).toEqual({days: 0, hours: 0, minutes: 0, seconds: 1})
    })
  })
})