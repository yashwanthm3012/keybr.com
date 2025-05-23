import { type KeyId, type ZoneId } from "../types.ts";

export type ZoneModDict = Record<KeyId, readonly ZoneId[]>;

export const STANDARD_MOD: ZoneModDict = {};

export const ANGLE_MOD: ZoneModDict = {
  Backquote: ["pinky", "left", "digit"],
  Digit1: ["pinky", "left", "digit"],
  Digit2: ["ring", "left", "digit"],
  Digit3: ["middle", "left", "digit"],
  Digit4: ["middle", "left", "digit"],
  Digit5: ["leftIndex", "left", "digit"],
  Digit6: ["leftIndex", "left", "digit"],
  Digit7: ["rightIndex", "right", "digit"],
  Digit8: ["rightIndex", "right", "digit"],
  Digit9: ["middle", "right", "digit"],
  Digit0: ["ring", "right", "digit"],
  Minus: ["pinky", "right", "digit"],
  Equal: ["pinky", "right", "digit"],
  Backspace: ["pinky", "right", "digit"],
  Tab: ["pinky", "left", "top"],
  KeyQ: ["pinky", "left", "top"],
  KeyW: ["ring", "left", "top"],
  KeyE: ["middle", "left", "top"],
  KeyR: ["leftIndex", "left", "top"],
  KeyT: ["leftIndex", "left", "top"],
  KeyY: ["rightIndex", "right", "top"],
  KeyU: ["rightIndex", "right", "top"],
  KeyI: ["middle", "right", "top"],
  KeyO: ["ring", "right", "top"],
  KeyP: ["pinky", "right", "top"],
  BracketLeft: ["pinky", "right", "top"],
  BracketRight: ["pinky", "right", "top"],
  Backslash: ["pinky", "right", "top"],
  CapsLock: ["pinky", "left", "home"],
  KeyA: ["pinky", "left", "home"],
  KeyS: ["ring", "left", "home"],
  KeyD: ["middle", "left", "home"],
  KeyF: ["leftIndex", "left", "home"],
  KeyG: ["leftIndex", "left", "home"],
  KeyH: ["rightIndex", "right", "home"],
  KeyJ: ["rightIndex", "right", "home"],
  KeyK: ["middle", "right", "home"],
  KeyL: ["ring", "right", "home"],
  Semicolon: ["pinky", "right", "home"],
  Quote: ["pinky", "right", "home"],
  Enter: ["pinky", "right", "home"],
  ShiftLeft: ["pinky", "left", "bottom"],
  KeyZ: ["ring", "left", "bottom"],
  KeyX: ["middle", "left", "bottom"],
  KeyC: ["leftIndex", "left", "bottom"],
  KeyV: ["leftIndex", "left", "bottom"],
  KeyB: ["leftIndex", "left", "bottom"],
  KeyN: ["rightIndex", "right", "bottom"],
  KeyM: ["rightIndex", "right", "bottom"],
  Comma: ["middle", "right", "bottom"],
  Period: ["ring", "right", "bottom"],
  Slash: ["pinky", "right", "bottom"],
  ShiftRight: ["pinky", "right", "bottom"],
  ControlLeft: ["pinky", "left", "bottom"],
  AltLeft: ["pinky", "left", "bottom"],
  Space: ["thumb", "right", "bottom"],
  AltRight: ["pinky", "right", "bottom"],
  ControlRight: ["pinky", "right", "bottom"],
};

export const ANGLE_WIDE_MOD: ZoneModDict = {
  Backquote: ["pinky", "left", "digit"],
  Digit1: ["pinky", "left", "digit"],
  Digit2: ["ring", "left", "digit"],
  Digit3: ["middle", "left", "digit"],
  Digit4: ["middle", "left", "digit"],
  Digit5: ["leftIndex", "left", "digit"],
  Digit6: ["leftIndex", "left", "digit"],
  Digit7: ["rightIndex", "right", "digit"],
  Digit8: ["rightIndex", "right", "digit"],
  Digit9: ["rightIndex", "right", "digit"],
  Digit0: ["middle", "right", "digit"],
  Minus: ["ring", "right", "digit"],
  Equal: ["pinky", "right", "digit"],
  Backspace: ["pinky", "right", "digit"],
  Tab: ["pinky", "left", "top"],
  KeyQ: ["pinky", "left", "top"],
  KeyW: ["ring", "left", "top"],
  KeyE: ["middle", "left", "top"],
  KeyR: ["leftIndex", "left", "top"],
  KeyT: ["leftIndex", "left", "top"],
  KeyY: ["rightIndex", "right", "top"],
  KeyU: ["rightIndex", "right", "top"],
  KeyI: ["rightIndex", "right", "top"],
  KeyO: ["middle", "right", "top"],
  KeyP: ["ring", "right", "top"],
  BracketLeft: ["pinky", "right", "top"],
  BracketRight: ["pinky", "right", "top"],
  Backslash: ["pinky", "right", "top"],
  CapsLock: ["pinky", "left", "home"],
  KeyA: ["pinky", "left", "home"],
  KeyS: ["ring", "left", "home"],
  KeyD: ["middle", "left", "home"],
  KeyF: ["leftIndex", "left", "home"],
  KeyG: ["leftIndex", "left", "home"],
  KeyH: ["rightIndex", "right", "home"],
  KeyJ: ["rightIndex", "right", "home"],
  KeyK: ["rightIndex", "right", "home"],
  KeyL: ["middle", "right", "home"],
  Semicolon: ["ring", "right", "home"],
  Quote: ["pinky", "right", "home"],
  Enter: ["pinky", "right", "home"],
  ShiftLeft: ["pinky", "left", "bottom"],
  KeyZ: ["ring", "left", "bottom"],
  KeyX: ["middle", "left", "bottom"],
  KeyC: ["leftIndex", "left", "bottom"],
  KeyV: ["leftIndex", "left", "bottom"],
  KeyB: ["leftIndex", "left", "bottom"],
  KeyN: ["rightIndex", "right", "bottom"],
  KeyM: ["rightIndex", "right", "bottom"],
  Comma: ["rightIndex", "right", "bottom"],
  Period: ["middle", "right", "bottom"],
  Slash: ["ring", "right", "bottom"],
  ShiftRight: ["pinky", "right", "bottom"],
  ControlLeft: ["pinky", "left", "bottom"],
  AltLeft: ["pinky", "left", "bottom"],
  Space: ["thumb", "right", "bottom"],
  AltRight: ["pinky", "right", "bottom"],
  ControlRight: ["pinky", "right", "bottom"],
};

export const SYMMETRIC_MOD: ZoneModDict = {
  Backquote: ["pinky", "left", "digit"],
  Digit1: ["pinky", "left", "digit"],
  Digit2: ["ring", "left", "digit"],
  Digit3: ["middle", "left", "digit"],
  Digit4: ["middle", "left", "digit"],
  Digit5: ["leftIndex", "left", "digit"],
  Digit6: ["leftIndex", "right", "digit"],
  Digit7: ["rightIndex", "right", "digit"],
  Digit8: ["middle", "right", "digit"],
  Digit9: ["middle", "right", "digit"],
  Digit0: ["ring", "right", "digit"],
  Minus: ["pinky", "right", "digit"],
  Equal: ["pinky", "right", "digit"],
  Backspace: ["pinky", "right", "digit"],
  Tab: ["pinky", "left", "top"],
  KeyQ: ["pinky", "left", "top"],
  KeyW: ["ring", "left", "top"],
  KeyE: ["middle", "left", "top"],
  KeyR: ["leftIndex", "left", "top"],
  KeyT: ["leftIndex", "left", "top"],
  KeyY: ["rightIndex", "right", "top"],
  KeyU: ["rightIndex", "right", "top"],
  KeyI: ["middle", "right", "top"],
  KeyO: ["ring", "right", "top"],
  KeyP: ["pinky", "right", "top"],
  BracketLeft: ["pinky", "right", "top"],
  BracketRight: ["pinky", "right", "top"],
  Enter: ["pinky", "right", "top"],
  CapsLock: ["pinky", "left", "home"],
  KeyA: ["pinky", "left", "home"],
  KeyS: ["ring", "left", "home"],
  KeyD: ["middle", "left", "home"],
  KeyF: ["leftIndex", "left", "home"],
  KeyG: ["leftIndex", "left", "home"],
  KeyH: ["rightIndex", "right", "home"],
  KeyJ: ["rightIndex", "right", "home"],
  KeyK: ["middle", "right", "home"],
  KeyL: ["ring", "right", "home"],
  Semicolon: ["pinky", "right", "home"],
  Quote: ["pinky", "right", "home"],
  Backslash: ["pinky", "right", "home"],
  ShiftLeft: ["pinky", "left", "bottom"],
  IntlBackslash: ["pinky", "left", "bottom"],
  KeyZ: ["ring", "left", "bottom"],
  KeyX: ["middle", "left", "bottom"],
  KeyC: ["leftIndex", "left", "bottom"],
  KeyV: ["leftIndex", "left", "bottom"],
  KeyB: ["leftIndex", "left", "bottom"],
  KeyN: ["rightIndex", "right", "bottom"],
  KeyM: ["rightIndex", "right", "bottom"],
  Comma: ["middle", "right", "bottom"],
  Period: ["ring", "right", "bottom"],
  Slash: ["pinky", "right", "bottom"],
  ShiftRight: ["pinky", "right", "bottom"],
  ControlLeft: ["pinky", "left", "bottom"],
  AltLeft: ["pinky", "left", "bottom"],
  Space: ["thumb", "right", "bottom"],
  AltRight: ["pinky", "right", "bottom"],
  ControlRight: ["pinky", "right", "bottom"],
};
