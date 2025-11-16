import { useState } from 'react';
import type { Location } from '@/types/location';
import { SelectedLocationContext } from './contexts/selected-location-context';
import TestSelector from './components/test-selector';
import TestSelected from './components/test-selected';

function App() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  );

  return (
    <SelectedLocationContext
      value={{
        selectedLocation: selectedLocation,
        selectLocation: setSelectedLocation,
      }}
    >
      <div className="bg-blue"> sdflsj</div>
      <TestSelector />
      <TestSelected />
    </SelectedLocationContext>
  );
}

export default App;
