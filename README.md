# gtfs.ts
A family of TypeScript libraries for withing with GTFS and GTFS-RT in a browser environment. The purpose is to aid development of transit applications local to the browser, with no external server or services needed.

Currently very alpha, and being designed to hit a minimum viable product for a personal transit system map. Functionality being added as-needed for my personal use cases.

Current packages:
 * `types` - Data model of GTFS and GTFS-RT encoded as TypeScript interfaces
 * `reader` - Takes binary GTFS and GTFS-RT, outputs objects conforming to `types` data model
