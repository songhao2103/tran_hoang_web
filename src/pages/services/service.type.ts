export interface IPartsItem {
  title: string;
  content: string;
}

export interface IServiceItem {
  image: string;
  description: string;
  titlePart: string;
  parts: IPartsItem[];
}
