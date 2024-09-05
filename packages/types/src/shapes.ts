/**
 * Represents a WGS84 geographic coordinate in decimal degrees form
 */
export interface GeoCoord {
  /**
   * Latitude, decimal degrees
   */
  latitude: float;

  /**
   * Longitude, decimal degrees
   */
  longitude: float;
};

export interface ShapePoint {
  /**
   * Location
   */
  location: GeoCoord;

  /**
   * Sequence number for this point. Sequence numbers increase along a Shape.
   *
   * Non-negative.
   */
  sequence_number: number;

  /**
   * Cumulative distance travelled from the start of the shape to this shape point
   */
  cumulative_distance: number;
};


/**
 * Represents the full line a vehicle travels as part of its route.
 *
 * Associated with Trips, and are a sequence of points. Stops don't lie on Shapes
 * but Stops are assumed to lie near the Shape. Shapes are linear geographic features.
 *
 * Here is one of the areas I deviate from one type interface instance corresponding
 * with exactly one row of the GTFS CSV. Making an array of items representing each
 * individual row of the shapes.txt CSV doesn't make sense and would be very inefficient
 * and annoying to work with (AoS vs SoA and all that).
 *
 * @note primary key (shape_id, shape_pt_sequence)
 */
export interface Shape {
  /**
   * UUID for the shape
   */
  shape_id: string;

  /**
   * Points of this shape
   */
  points: ShapePoint[];
};
