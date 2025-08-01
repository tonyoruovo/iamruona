import type { SchemeId } from "../enums/ui.enum";

export interface ColorScheme {
    mode: SchemeId;
}

export type UIDimension = {
    width: number
    height: number
}

export type UIPoint = { x: number; y: number }

export type UIRectData = Readonly<UIDimension> & Partial<UIPoint>

