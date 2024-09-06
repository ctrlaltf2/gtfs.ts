/**
 * Info about the GTFS feed itself
 *
 * @ref https://gtfs.org/documentation/schedule/reference/#feed_infotxt
 */
export interface FeedInfo {
  /**
   * Full name of the organization that published the dataset
   */
  feed_publisher_name: string;

  /**
   * URL of the publisher's website
   */
  feed_publisher_url: string;

  /**
   * Language code for the text in the dataset
   */
  feed_lang: string;

  /**
   * Language to use when the data consumer doesn't know the language of the rider
   *
   * Often English/"en".
   */
  default_lang: string;

  /**
   * The start date for the window of validity for this dataset
   */
  feed_start_date?: Date;

  /**
   * The end date for the window of validity for this dataset
   */
  feed_end_date?: Date;

  /**
   * Version of the feed
   */
  feed_version?: string;

  /**
   * Email contact for the feed
   */
  feed_contact_email?: string;

  /**
   * Contact URL for the feed. Might go to a help desk, web-form, etc.
   */
  feed_contact_url?: string;
};
