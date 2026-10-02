import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Presentation-only prototype. See HANDOFF.md (Day 2 · Phase 1, P1 Q5) for the boundary conditions.
// Phase 4: technical visuals live in ../person-2/ and problem evidence in ../person-3/ (Plan §6 folders);
// they are imported here, so React is deduped to this project's copy and the sibling folders are allowed.
export default defineConfig({
  plugins: [react()],
  resolve: { dedupe: ['react', 'react-dom'] },
  server: { fs: { allow: ['..'] } },
});
