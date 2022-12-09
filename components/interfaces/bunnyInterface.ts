import { equipmentItem } from "./equipmentItem";
import { activeTask } from "./activeTask";

export interface bunnyInterface {
  bunny: {
    id: number,
    name: string,
    lvl: number,
    vitality: number,
    carrots_limit: number,
    energy: number,

    stats: {
      str: number,
      dex: number,
      vit: number,
      int: number,
      krm: number,
    },

    base: {
      rabbit: string,
      mouth?: string,
      eyes?: string,
      bg?: string,
    },

    equipment: {
      overhead?: equipmentItem,
      faces?: equipmentItem,
      right?: equipmentItem,
      left?: equipmentItem,
      hats?: equipmentItem,
      clothes?: equipmentItem,
      necklace?: equipmentItem,
      ears?: equipmentItem,
    },
    inventory: Array<equipmentItem>,
    activeTask?: activeTask,
    workHistory?: activeTask[],
    isLevelUp: boolean;
  },
}
