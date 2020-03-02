/**
* Copyright (c) 2020-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

import { useEffect, useState } from 'react'

const DAYS_DIVISOR = 86400000; //1000 * 60 * 60 * 24
const HOURS_DIVISOR = 3600000; //1000 * 60 * 60
const MINUTES_DIVISOR = 60000; //1000 * 60
const SECONDS_DIVISOR = 1000; //1000

export const useLiveCountDown = (targetDate) => {

  const [timeLeft, setTimeleft] = useState(countDown(targetDate))

  useEffect(() => {
    const nextTick = new Date();
    nextTick.setSeconds(nextTick.getSeconds() + 1)
    const delay = nextTick - (new Date())
    const timeoutId = setTimeout(setTimeleft, delay, countDown(targetDate))
    return () => {
      clearTimeout(timeoutId)
    };
  }, [timeLeft, targetDate])

  return timeLeft
}


export const formatDigits = digits => {
  return String(digits).padStart(2, "0")
}

export default function countDown(targetDate) {
  const timeDelta = targetDate.getTime() - Date.now();
  if(timeDelta  < 0) {
    return {days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
  
  const days = Math.floor(timeDelta / DAYS_DIVISOR);
  const hours = Math.floor((timeDelta % DAYS_DIVISOR) / HOURS_DIVISOR);
  const minutes = Math.floor((timeDelta % HOURS_DIVISOR) / MINUTES_DIVISOR);
  const seconds = Math.floor((timeDelta % MINUTES_DIVISOR) / SECONDS_DIVISOR);

  return {days, hours, minutes, seconds}
}
