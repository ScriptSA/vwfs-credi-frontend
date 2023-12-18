export interface Menu {
  id: number;
  parentId: number;
  title: string;
  subTitle: string|null;
  iconName: string;
  routerLink: string|null;
}
