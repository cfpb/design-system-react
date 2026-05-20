import '@testing-library/jest-dom/vitest';

// React 19: allow act() in Vitest/jsdom (see react.dev/warnings/react-dom-test-utils).
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
