export interface product_class_data {
  class_id: number;
  class_name: string;
  class_image: string;
  storage_life_opened: number;
  category_id: number;
  unit_id: number;
}

export interface product_class_interface {
  product_class: product_class_data;
}
