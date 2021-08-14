/**
 * The current checkin state of students or the courses.
 */
export enum CheckinState {
  /**
   * Students did not check in, or the course
   * has stopped accepting checkin request.
   */
  NOT_CHECKED_IN = "NOT_CHECKED_IN",
  /**
   * Students checked in on time, or the course
   * are accepting checkin request.
   */
  ON_TIME = "ON_TIME",
  /**
   * Students checked in late, or the course start
   * marking the ingoing checkin request as late.
   */
  LATE = "LATE",
}

export default {
  CheckinState,
};
