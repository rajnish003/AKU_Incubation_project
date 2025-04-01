'use client';
import { useEffect } from 'react';
import fluidCursor from '../hooks/useFluidCursor';
const FluidCursor = () => {
  useEffect(() => {
    fluidCursor();
  }, []);
  return (
    <div className="fixed top-0 left-0 z-[-1]">
      <canvas id="fluid" className="w-screen h-screen pointer-events-none" />
    </div>
  );

};
export default FluidCursor;