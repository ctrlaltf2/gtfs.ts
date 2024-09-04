# @gtfs.ts/types
Types from the GTFS data model, from both the schedule and real-time flavors.

Reference: https://gtfs.org/documentation/schedule/reference and https://gtfs.org/documentation/realtime/reference/

Currently all I care about are the features that Pittsburgh Regional Transit uses in their GTFS feed, i.e. ones relating to buses, a sad light rail system, and some funiculars. These are the areas I'm prioritizing for now. Planned items:

 * GTFS Schedule
     * [x] agency
     * [x] calendar
     * [x] calendar_dates
     * [x] fare_attributes
     * [x] feed_info
     * [ ] routes
     * [ ] shapes
     * [ ] stop_times
     * [ ] stops
     * [ ] trips
 * GTFS Real-Time:
     * To enumerate

Unplanned (for now):

 * GTFS Schedule:
     * [ ] areas
     * [ ] attributions
     * [ ] booking_rules
     * [ ] fare_leg_rules
     * [ ] fare_media
     * [ ] fare_products
     * [ ] fare_rules
     * [ ] fare_transfer_rules
     * [ ] frequencies
     * [ ] levels
     * [ ] location_group_stops
     * [ ] location_groups
     * [ ] locations.geojson
     * [ ] networks
     * [ ] pathways
     * [ ] route_networks
     * [ ] stop_areas
     * [ ] timeframes
     * [ ] transfers
     * [ ] translations

