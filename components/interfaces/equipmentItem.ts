export interface equipmentItem {
  idx: number,
  itemSlot: string,
  name: string,
  baseParams:{
    rarityInt:number,
    str:number,
    dex:number,
    int:number,
    vit:number,
    krm:number,
  },
  image:string,
  // increase?: {
  //   str?: number,
  //   dex?: number,
  //   vit?: number,
  //   int?: number,
  //   krm?: number,
  // }
  // requirements?: {
  //   str?: number,
  //   dex?: number,
  //   vit?: number,
  //   int?: number,
  //   krm?: number,
  // }
}
