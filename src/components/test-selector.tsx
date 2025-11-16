import { SelectedLocationContext } from '@/contexts/selected-location-context';
import { use } from 'react';
import type { Location } from '@/types/location';

const DUMMY_LOCATIONS: Location[] = [
  {
    id: '9007308',
    name: '강남역 2호선',
    address: '서울 강남구 강남대로 396',
    x: '127.027613',
    y: '37.497951',
  },
  {
    id: '21160589',
    name: '홍대입구역 2호선',
    address: '서울 마포구 동교동 165',
    x: '126.923778',
    y: '37.556870',
  },
  {
    id: '8245133',
    name: '부산역 1호선',
    address: '부산 동구 중앙대로 206',
    x: '129.040085',
    y: '35.114776',
  },
];

export default function TestSelector() {
  const context = use(SelectedLocationContext);
  if (context === undefined) {
    return null;
  }

  return (
    <ul className="w-50">
      {DUMMY_LOCATIONS.map((loc) => (
        <li key={loc.id}>
          <button
            onClick={() => context?.selectLocation(loc)}
            className="w-full rounded-2xl border p-2 hover:cursor-pointer"
          >
            {loc.name}
          </button>
        </li>
      ))}
      <li>
        <button
          onClick={() => context?.selectLocation(null)}
          className="w-full rounded-2xl border p-2 hover:cursor-pointer"
        >
          선택해제
        </button>
      </li>
    </ul>
  );
}
