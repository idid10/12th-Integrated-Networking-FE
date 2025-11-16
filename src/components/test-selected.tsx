import { SelectedLocationContext } from '@/contexts/selected-location-context';
import { use } from 'react';
export default function TestSelected() {
  const context = use(SelectedLocationContext);
  const selectedLocation =
    context?.selectedLocation != null
      ? context?.selectedLocation.name
      : '선택된 지역이 없습니다';

  return <span className="text-orange-500">{selectedLocation}</span>;
}
