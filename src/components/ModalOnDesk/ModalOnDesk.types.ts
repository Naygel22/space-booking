import { Desk } from '../SpaceViewer/SpaceViewer.types';

export type ModalOnDeskProps = {
  desk: Desk,
  onClose: () => void,
  onBook: (desk: Desk) => void,
  selectedDate: string,
}

export type DeskFeatures = {
  monitors: number
  sockets: number
  hasLamp: boolean
  adjustableHeight: boolean
  otherAccessories?: string[]
}