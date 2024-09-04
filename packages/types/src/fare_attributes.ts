export enum PaymentMethod {
	WhileBoarding = 0,
	BeforeBoarding
};

/**
 * Part of GTFS-Fares-V1, a basic descriptor of an Agency's fare structure
 *
 * @note primary key fare_id
 * @ref https://gtfs.org/documentation/schedule/reference/#fare_attributestxt
 */
export interface FareAttributes {
	fare_id: string;

	/**
	 * Fare price in the current set by currency_type
	 *
	 * @example 2.75
	 */
	price: number;

	/**
	 * Currency used to pay the fare. ISO-4217 code
	 *
	 * @see https://en.wikipedia.org/wiki/ISO_4217#Active_codes
	 * @example "USD"
	 */
	currency_type: string;

	/**
	 * When the payment is due, i.e. when boarding or before boarding
	 *
	 * @example PaymentMethod.WHILE_BOARDING
	 */
	payment_method: PaymentMethod;

	/**
	 * Number of transfers permitted for a given fare
	 * 
	 * @note if unset, unlimited is to be assumed
	 * @example 3
	 */
	transfers: number

	/**
	 * Agency this fare descriptor refers to. Must be set if there's multiple fares
	 * in this GTFS file's associated agency.txt.
	 */
	agency_id?: string;

	/**
	 * Length of time before a transfer expires in seconds
	 * If transfers === 0 then this field can be used to indicate how long a ticket is valid
	 */
	transfer_duration?: number
};
