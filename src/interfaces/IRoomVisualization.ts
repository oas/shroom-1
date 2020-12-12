export interface IRoomVisualization {
  addFloorChild(element: PIXI.DisplayObject): void;
  addWallChild(element: PIXI.DisplayObject): void;
  addBehindWallChild(element: PIXI.DisplayObject): void;
  addContainerChild(element: PIXI.DisplayObject): void;
  addTileCursorChild(element: PIXI.DisplayObject): void;

  removeBehindWallChild(element: PIXI.DisplayObject): void;
  removeContainerChild(element: PIXI.DisplayObject): void;

  addCursorChild(element: PIXI.DisplayObject): void;
  addXLevelMask(level: number, element: PIXI.Sprite): MaskNode;
  addYLevelMask(level: number, element: PIXI.Sprite): MaskNode;

  addLandscape(element: PIXI.DisplayObject): void;
}

export type MaskNode = {
  remove: () => void;
};
