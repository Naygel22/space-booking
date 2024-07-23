import { createContext, useMemo } from 'react';
import { useContext } from 'react';
import { Step } from 'react-joyride';
import { useSetState } from 'react-use';

type AppState = {
  run: boolean;
  stepIndex: number;
  steps: Step[];
  tourActive: boolean;
};

const appState = {
  run: false,
  stepIndex: 0,
  steps: [],
  tourActive: false,
};

export const TourContext = createContext({
  state: appState,
  setState: () => undefined,
});

TourContext.displayName = 'TourContext';
export const TourContextProvider = (props: any) => {
  const [state, setState] = useSetState(appState);

  const value = useMemo(
    () => ({
      state,
      setState,
    }),
    [setState, state],
  );

  return <TourContext.Provider value={value} {...props} />;
};

export function useTourContext(): {
  setState: (patch: Partial<AppState> | ((previousState: AppState) => Partial<AppState>)) => void;
  state: AppState;
} {
  const context = useContext(TourContext);

  if (!context) {
    throw new Error('useTourContext must be used within a TourContextProvider');
  }

  return context;
}