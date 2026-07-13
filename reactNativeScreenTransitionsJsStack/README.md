# `react-native-screen-transitions` iOS Performance Reproduction

This project reproduces slow navigation transitions on iOS when using
[`react-native-screen-transitions`](https://github.com/duguyihou/react-native-screen-transitions)
with React Native Reanimated's `IOS_SYNCHRONOUSLY_UPDATE_UI_PROPS` static feature flag enabled.

## Reproduce the issue

Install the dependencies, generate the native projects, and run the app on iOS:

```sh
npm install
npx expo prebuild
npx expo run:ios
```

Navigate between the screens in the app. Transitions should be noticeably slow while the following Reanimated configuration is present in `package.json`:

```json
{
  "reanimated": {
    "staticFeatureFlags": {
      "IOS_SYNCHRONOUSLY_UPDATE_UI_PROPS": true
    }
  }
}
```

## Verify the workaround

1. Remove the `reanimated` configuration shown above from `package.json`.
2. Delete the generated files and installed dependencies:

   ```sh
   rm -rf node_modules ios android
   ```

3. Reinstall and rebuild the app:

   ```sh
   npm install
   npx expo prebuild
   npx expo run:ios
   ```

Navigation transitions should now run at the expected speed.

## Android behavior

The equivalent Android feature flag does not appear to cause the same performance issue.
