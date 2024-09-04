/**
 * @ref https://gtfs.org/documentation/schedule/reference/#routestxt
 * @ref https://developers.google.com/transit/gtfs/reference/extended-route-types
 */
export enum RouteType {
  // Base
  /**
   * Tram, streetcar, any light rail
   *
   * Street-level rail in a metropolitan area.
   */
  LightRail = 0,
  /**
   * Subway, metro.
   *
   * Underground rail in a metropolitan area.
   */
  Metro = 1,
  /**
   * Intercity or long-distance rail
   */
  Rail = 2,
  /**
   * Short and long distance bus routes
   */
  Bus = 3,
  /**
   * Short and long distance boat service
   */
  Ferry = 4,
  /**
   * Cable tram. Street-level rail cars where cable runs below vehicles,
   * like in San Francisco
   */
  CableTram = 5,
  /**
   * Aerial lifts, suspended car cables, gondolas, ski-lift-esque machinations.
   */
  AerialLift = 6,
  /**
   * Funiculars, a rail system for steep incliens
   */
  Funicular = 7,
  /**
   * Electric buses that pull power overhead with e.g. a pantograph
   */
  Trolleybus = 11,
  /**
   * Monorail, a rail system with a track that only has one rail or beam
   */
  Monorail = 12,

  // Extended
  /**
   * @example Not applicable (N/A)
   */
  RailwayService = 100,
  /**
   * @example TGV (FR), ICE (DE), Eurostar (GB)
   */
  HighSpeedRailService = 101,
  /**
   * @example InterCity/EuroCity
   */
  LongDistanceTrains = 102,
  /**
   * @example InterRegio (DE), Cross County Rail(GB)
   */
  InterRegionalRailService = 103,
  CarTransportRailService = 104,
  /**
   * @example GNER Sleeper (GB)
   */
  SleeperRailService = 105,
  /**
   * @example TER (FR), Regionalzug (DE)
   */
  RegionalRailService = 106,
  /**
   * @example Romney, Hythe & Dymchurch (GB)
   */
  TouristRailwayService = 107,
  /**
   * @example Gatwick Shuttle (GB), Sky Line (DE)
   */
  RailShuttleWithinComplex = 108,
  /**
   * @example S-Bahn (DE), RER (FR), S-tog (Kopenhagen)
   */
  SuburbanRailway = 109,
  ReplacementRailService = 110,
  SpecialRailService = 111,
  LorryTransportRailService = 112,
  AllRailServices = 113,
  CrossCountryRailService = 114,
  VehicleTransportRailService = 115,
  /**
   * @example Rochers de Naye (CH), Dolderbahn(CH)
   */
  RackandPinionRailway = 116,
  AdditionalRailService = 117,
  CoachService = 200,
  /**
   * @example EuroLine, Touring
   */
  InternationalCoachService = 201,
  /**
   * @example National Express (GB)
   */
  NationalCoachService = 202,
  /**
   * @example Roissy Bus (FR), Reading-Heathrow(GB)
   */
  ShuttleCoachService = 203,
  RegionalCoachService = 204,
  SpecialCoachService = 205,
  SightseeingCoachService = 206,
  TouristCoachService = 207,
  CommuterCoachService = 208,
  AllCoachServices = 209,
  UrbanRailwayService = 400,
  /**
   * @example Métro de Paris
   */
  MetroService = 401,
  /**
   * @example London Underground, U-Bahn
   */
  UndergroundService = 402,
  UrbanRailwayService = 403,
  AllUrbanRailwayServices = 404,
  Monorail = 405,
  BusService = 700,
  /**
   * @example Eastbourne-Maidstone (GB)
   */
  RegionalBusService = 701,
  /**
   * @example X19 Wokingham-Heathrow (GB)
   */
  ExpressBusService = 702,
  /**
   * @example 38 London: Clapton Pond-Victoria(GB)
   */
  StoppingBusService = 703,
  LocalBusService = 704,
  /**
   * @example N prefixed buses in London (GB)
   */
  NightBusService = 705,
  /**
   * @example Maidstone P4 (GB)
   */
  PostBusService = 706,
  SpecialNeedsBus = 707,
  MobilityBusService = 708,
  MobilityBusForRegisteredDisabled = 709,
  SightseeingBus = 710,
  /**
   * @example 747 Heathrow-Gatwick Airport Service(GB)
   */
  ShuttleBus = 711,
  SchoolBus = 712,
  SchoolAndPublicServiceBus = 713,
  RailReplacementBusService = 714,
  DemandAndResponseBusService = 715,
  AllBusServices = 716,
  TrolleybusService = 800,
  TramService = 900,
  CityTramService = 901,
  /**
   * @example Munich (DE), Brussels (BE), Croydon(GB)
   */
  LocalTramService = 902,
  RegionalTramService = 903,
  /**
   * @example Blackpool Seafront (GB)
   */
  SightseeingTramService = 904,
  ShuttleTramService = 905,
  AllTramServices = 906,
  WaterTransportService = 1000,
  AirService = 1100,
  FerryService = 1200,
  /**
   * @example Telefèric de Montjuïc (ES), Saleve(CH),RooseveltIslandTramway(US)
   */
  AerialLiftService = 1300,
  TelecabinService = 1301,
  CableCarService = 1302,
  ElevatorService = 1303,
  ChairLiftService = 1304,
  DragLiftService = 1305,
  SmallTelecabinService = 1306,
  AllTelecabinServices = 1307,
  /**
   * @example Rigiblick (Zürich, CH)
   */
  FunicularService = 1400,
  TaxiService = 1500,
  /**
   * @example Marshrutka (RU), dolmuş (TR)
   */
  CommunalTaxiService = 1501,
  WaterTaxiService = 1502,
  RailTaxiService = 1503,
  BikeTaxiService = 1504,
  LicensedTaxiService = 1505,
  PrivateHireServiceVehicle = 1506,
  AllTaxiServices = 1507,
  MiscellaneousService = 1700,
  HorseDrawnCarriage = 1702,
};

// TODO: just break this out to two duplicate structs. Wording/naming is hard when combining pickup + dropoff even though actions taken by rider with regards to continuous pickup/dropoff are the same in both cases
/**
 * Action riders must take for getting onto or off of a route
 */
export enum PickupDropoffAction {
  /**
   * No actions needed, route is continuous like a ski lift
   */
  Continuous = 0,
  /**
   * Default if empty
   */
  NotContinuous = 1,
  /**
   * Rider must contact the agency to arrange continuous access
   */
  ContactAgency = 2,
  /**
   * Rider must coordinate with the driver for continuous access
   */
  ContactDriver = 3
};

/**
 * @note primary key route_id
 * @ref https://gtfs.org/documentation/schedule/reference/#routestxt
 */
export interface Route {
  route_id: string;

  agency_id?: string;

  /**
   * Short name for a route.
   *
   * @example "28X"
   */
  route_short_name?: string;

  /**
   * Long name for a route. Might include destination or stop
   *
   * @example "Airport Flyer"
   */
  route_long_name?: string;

  /**
   * Description of a route, more than just a short and long name
   *
   * @example '28X is a bus line running throughout the City of Pittsburgh,
   *           offering extended service times beyond usual bus schedules to
   *           serve riders getting to/from the airport in Moon Township.'
   */
  route_desc?: string;

  /**
   * Type of the route
   *
   * @example RouteType.Funicular
   */
  route_type: RouteType;

  /**
   * URL to a web page that is specific to that route
   */
  route_url: Url;

  /**
   * Color for the route. In format string "RRGGBB".
   *
   * @example "FF0000" for a very bright red
   */
  route_color?: string;

  /**
   * Color for the route text.
   */
  route_text_color?: string;

  /**
   * Sort key for the route. Defines how routes in aggregate should be sorted
   * when displaying to the riders. Order ascending.
   */
  route_sort_order: number;

  /**
   * If there's continuous pickup for riders of this route, and how it works.
   */
  continuous_pickup?: PickupDropoffAction;

  /**
   * If there's continuous drop off rider riders of this route, and how it works.
   */
  continuous_drop_off?: PickupDropoffAction;

  /**
   * Foreign key to network id in route_networks.txt. Identifies a group of routes.
   */
  network_id?: string;
};
