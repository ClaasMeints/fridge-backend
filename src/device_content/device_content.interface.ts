export interface device_content_data {
  device_id: number;
  filled_in: Date;
  product_id: number;
  opened: Date;
  dropped_out: Date;
  percentage_left: number;
}
export interface device_content_interface {
  device_content: device_content_data;
}
