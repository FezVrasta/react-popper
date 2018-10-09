// @flow

// Public components
import Popper, { placements, Defaults as PopperJSDefaults } from './Popper';
import Manager from './Manager';
import Reference from './Reference';
export { Popper, placements, Manager, Reference, PopperJSDefaults };

// Public types
import type { Placement } from 'popper.js';
import type { ManagerProps } from './Manager';
import type { ReferenceProps, ReferenceChildrenProps } from './Reference';
import type {
  PopperChildrenProps,
  PopperArrowProps,
  PopperProps,
} from './Popper';
export type {
  Placement,
  ManagerProps,
  ReferenceProps,
  ReferenceChildrenProps,
  PopperChildrenProps,
  PopperArrowProps,
  PopperProps,
};
