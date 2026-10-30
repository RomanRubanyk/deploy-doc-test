# deploy-doc-test
# test1
# test2

## Mobile build fixture

A minimal Android application for testing DeployDoc's
`expo-54-android-apk-v1` build recipe.

- Expo: `54.0.23`
- React Native: `0.81.5`
- React: `19.1.0`
- Android application ID: `dev.deploydoc.test`
- Source version: `1.0.0`

The application displays a counter with **Add one** and **Reset** buttons.
After installing the APK, launch it and check both buttons.

`app.json` is the static Expo configuration. `index.js` registers the root
component. `package-lock.json` pins the dependency versions used by `npm ci`.
The runner generates the native Android project and assigns the build's
`versionCode`; the source controls `expo.version`.

`.deploydoc/build.json` selects only `main`. To test the pipeline, commit these
source files and the lockfile, then push or merge the commit into `main`.
Configuration validation is the first stage; native builds also require the
project's automatic-build policy, worker and tester-signing identity to be set up.

Generated native projects, dependencies, APKs, environment files and signing
material belong outside the committed source.
