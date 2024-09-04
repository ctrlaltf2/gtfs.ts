/**
 * Specifies an operation interval on a week basis
 *
 * @ref https://gtfs.org/documentation/schedule/reference/#calendartxt
 */
export interface Calendar {
	/**
	 * Identifies a set of dates when service is available for one or more routes
	 *
	 * @note primary key
	 * @example "Weekdays"
	 */
	service_id: string;

	// Days of the week- self explanatory
	/**
	 * true/1 if service is available that day or false/0 if not.
	 */
	monday: boolean;
	tuesday: boolean;
	wednesday: boolean;
	thursday: boolean;
	friday: boolean;
	saturday: boolean;
	sunday: boolean;

	/**
	 * Start service day for the service interval. YYYYMMDD format.
	 *
	 * @example 20240901
	 */
	start_date: Date

	/**
	 * End service day for the service interval
	 */
	end_date: Date
};
