import dayjs from 'dayjs';

import { SECONDS_IN_HOUR } from '../consts/consts';

export class DateTimeHelper {
  static timestampToDate = (timestamp: number | null | undefined) => {
    if (timestamp === undefined || timestamp === null) {
      return null;
    }

    if (timestamp === 0) {
      return 0;
    }

    return dayjs.unix(timestamp).format('DD-MM-YYYY, HH:mm:ss');
  };

  static combineTimestamps = (timestampNow: number, timestamp: number) => {
    return timestampNow + timestamp * 1000;
  };

  static timestampToTime = (timestamp: number | null | undefined) => {
    if (timestamp === null || timestamp === undefined) {
      return null;
    }

    if (timestamp === 0) {
      return 0;
    }

    return timestamp / SECONDS_IN_HOUR;
  };
}
