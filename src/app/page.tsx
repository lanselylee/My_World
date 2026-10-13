import { Suspense } from 'react';
import RoomScene from '../components/room/RoomScene';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <RoomScene />
    </Suspense>
  );
}
