
export enum ExceptionType {
	SERVICE_ADDED = 1,
	SERVICE_REMOVED,
};

/**
 * Represents a service exception
 *
 * @note primary key (service_id, date)
 */
export interface CalendarDates {
	/**
	 * Foreign key into corresponding CalendarInterval set.
	 * Refers to a specific service exception
	 */
	service_id: string;

	/**
	 * Date when the service exception occurs
	 */
	date: Date 

	/**
	 * Type of exception, i.e. if the service it added or removed.
	 */
	exception_type: ExceptionType
};
