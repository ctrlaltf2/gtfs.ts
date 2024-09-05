import { GeoCoord } from "./common";

export enum StopType {
  Platform = 0,
  Station,
  EntranceExit,
  Generic,
  BoardingArea,
};

export enum WheelchairAccess {
  /**
   * No accessibility information available
   */
  Unknown = 0,
  /**
   * Some vehicles serving this Stop can be boarded by a rider in a wheelchair
   */
  Some,
  /**
   * Wheelchair boarding not possible at this Stop
   */
  None,
};

/**
 * Identifies a location- a stop/platform, station, entrance/exit, boarding area, etc.
 */
export interface Stop {
  stop_id: string;

  /**
   * ID for the stop for the riders to use. Might be the same as `stop_id`.
   */
  stop_code?: string;

  /**
   * Name of the location, which should match the agency's rider-facing material
   * for the location on e.g. timetables, online, signage.
   */
  stop_name?: string;

  /**
   * Text-to-speech readable version of the `stop_name`
   */
  tts_stop_name?: string;

  /**
   * Longer description of the stop. Shouldn't be a duplicate of `stop_name`
   */
  stop_desc?: string;

  /**
   * Geographic location of the stop
   */
  location?: GeoCoord;

  /**
   * Fare zone ID for a stop
   */
  zone_id?: string;

  /**
   * URL to a web page about the location. Different from agency url or route url.
   */
  stop_url?: string;

  /**
   * Type of location
   */
  location_type?: StopType;

  /**
   * Parent station, allows defining a hierarchy between different Stops.
   *
   * @note foregin key to other stop_id
   */
  parent_station?: string;

  /**
   * Timezone of the location.
   * If unset, inherits from parent_station. If parent_station is unset, inherits agency timezone.
   *
   * @example "America/New_York"
   */
  stop_timezone?: string;

  /**
   * Information on this Stop about wheelchair access
   */
  wheelchair_boarding?: WheelchairAccess;

  /**
   * Level of the location
   */
  level_id?: string;

  /**
   * Identifier for a platform stop (stop belonging to a station).
   * Usually used to help localize the platform name across languages.
   */
  platform_code?: string;
};
