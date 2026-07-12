# React Navigation JavaScript Stack Test

Minimal Expo SDK 57 app for evaluating React Navigation's JavaScript-based stack navigator.

## Architecture

- `index.ts` registers the Expo root component and loads Gesture Handler first.
- `src/navigation/root-navigator.tsx` defines the typed static `Home` and `Red` routes.
- `src/screens` contains the two focused test screens.
- `src/navigation/root-navigator.test.tsx` exercises the real navigator with React Native Testing Library.

The Home button pushes a full red content screen without a transition animation. The standard stack header is intentionally retained so header back, swipe-back, and Android system back behavior can be tested.

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
