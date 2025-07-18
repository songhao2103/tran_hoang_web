import type { ReactNode } from "react";

export interface ICostOfOrder {
  name: string;
  description: string;
  required: boolean;
}

export interface IPriceList {
  title: string;
  component: () => ReactNode | ReactNode;
  value: number;
}

export interface IPurchasingService {
  orderValueRange: string;
  serviceFeePercent: number;
}

export interface IBatchItem {
  id: number;
  category: string;
  haNoiKg?: number;
  haNoiKhoi?: number;
  hcmKg?: number;
  hcmKhoi?: number;
}

export interface IWeightPackagingFee {
  label: string;
  firstKgPrice: number;
  nextKgPrice: number;
}

export interface IVolumePackagingFee {
  volumeRange: string;
  feeDescription: string;
}
