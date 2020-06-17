import { LayoutInterface } from "./interfaces";

export const swapPlaces = (
  layoutDuplicate: LayoutInterface[],
  elementTo: React.MutableRefObject<any>,
  elementFrom: React.MutableRefObject<any>
) => {
  layoutDuplicate[elementTo.current.index].component =
    elementFrom.current.content;
  layoutDuplicate[elementFrom.current.index].component =
    elementTo.current.content;
};
export const resetRef = (
  e: React.MutableRefObject<any>,
  e2: React.MutableRefObject<any>
) => {
  e.current.index = null;
  e.current.content = "";
  e2.current = null;
};
export const setElement = (
  e: React.MutableRefObject<any>,
  index: number,
  layout: any
) => {
  e.current = {
    index,
    content: layout[index].component,
  };
};
export const getStyles = (
  index: number,
  dragItem: React.MutableRefObject<any>
) => {
  let className = "";
  if (index === dragItem.current) className += " active";
  return className;
};
export const createDeepClone = (original: LayoutInterface[]) =>
  JSON.parse(JSON.stringify(original));

export const FIRST = "FIRST";
export const SECOND = "SECOND";
export const DRAGEND = "dragend";
