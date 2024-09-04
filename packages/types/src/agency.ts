/**
 * @ref https://gtfs.org/documentation/schedule/reference/#agencytxt
 */
export interface Agency {
	/**
	 * Identifies transit brand, globally unique,
	 * used as foreign key in other types to link
	 * back to this Agency instance.
	 *
	 * @note primary key
	 * @example "PRT"
	 */
	agency_id?: string;

	/**
	 * Agency full name
	 *
	 * @example "Pittsburgh Regional Transit"
	 */
	agency_name: string;

	/**
	 * Agency URL
	 *
	 * @example URL("https://rideprt.org")
	 */
	agency_url: URL;

	/**
	 * String representing the timezone the Agency operates under.
	 *
	 * @example "America/New_York"
	 */
	agency_timezone: string;

	/**
	 * Agency language code
	 *
	 * @example "en"
	 */
	agency_lang?: string;

	/**
	 * Agency phone number
	 *
	 * @example "412-442-2000"
	 * @example "503-238-RIDE"
	 */
	agency_phone?: string;

	/**
	 * Agency's fare URL, where riders may purchase tickets/pay fare
	 *
	 * @example "https://www.rideprt.org/fares-and-passes/fare-information"
	 */
	agency_fare_url?: string;

	/**
	 * Agency email leading to the Agency's customer support department
	 *
	 */
	agency_email?: string;
};
