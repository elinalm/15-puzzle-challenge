import React from 'react';
import { ControlContext, IControlContext } from './context';

export const useControls = (): IControlContext =>
  React.useContext(ControlContext);
