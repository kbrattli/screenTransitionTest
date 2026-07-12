# React Native Screen Transitions JavaScript Stack Test

Minimal Expo SDK 57 app for evaluating the blank stack from `react-native-screen-transitions`.

## Architecture

- `index.ts` registers the Expo root component and loads Gesture Handler first.
- `src/navigation/root-navigator.tsx` defines the typed static `Home` and `Red` blank-stack routes.
- `src/screens` contains the two focused test screens.
- `src/navigation/root-navigator.test.tsx` exercises the real navigator with React Native Testing Library.

The Home button pushes a full red content screen as an immediate cut: no interpolator or transition spec is configured, and gestures are disabled. Blank stack intentionally provides no standard header or navigation chrome. Android system back and programmatic stack-pop behavior remain available.

## Commands

```sh
npm install
npm start
npm run ios
npm run android
npm run web
npm run lint
npm run typecheck
npm test
npm run doctor
```
