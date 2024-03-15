import { ReactNode } from "react";

export type LayoutType = {
  head?: string;
  page: string;
  children?: ReactNode;
  loading?: boolean;
  route?: string;
  title?: string;
  hideSearch?: boolean;
  logo?: boolean;
};

export interface LogoInterface {
  active?: string | "home";
  height?: number;
  width?: number;
  onClick?: () => void;
  name?: string;
}

export interface MenuInterface {
  page: any;
  active: string;
  keys: number;
  hide?: boolean;
}

export type CategoryType = {
  title: string;
  icon: any;
};

export type ButtonType = {
  children: ReactNode;
  action: () => void;
  color?: any;
  size?: any;
  style?: any;
};

export type ApartmentDetailsType = {
  bath: number;
  bed: number;
  area: number;
};
export type ApartmentType = {
  id?: string;
  title: string;
  description: string;
  details: ApartmentDetailsType;
  thumb: string;
  floor: string;
  gallery: ApartmentMediaType[];
};
export type ApartmentMediaType = {
  id?: string;
  url: string;
};

export type AmenitiesType = {
  title: string;
  description: string;
  thumb: string;
};

export type FloorType = {
  title: string;
  thumb: string;
};

export type GalleryType = {
  thumb: string;
};
