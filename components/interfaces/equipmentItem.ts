export interface equipmentItem {
  id: number,
  type: string,
  rarity: string
  name: string,
  increase?: {
    str?: number,
    dex?: number,
    vit?: number,
    int?: number,
    krm?: number,
  }
  requirements?: {
    str?: number,
    dex?: number,
    vit?: number,
    int?: number,
    krm?: number,
  }
}
