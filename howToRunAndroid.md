# Starting an Android Emulator without Android Studio on Windows

Follow these steps to launch an Android emulator directly using the command line on a Windows machine:

1. Open PowerShell.

2. Navigate to your Android SDK's emulator directory using the `cd` command:

   ```
   cd C:\Users\{userName}\AppData\Local\Android\Sdk\emulator
   ```

3. List all available Android Virtual Devices (AVDs) with the following command:

   ```
   ./emulator -list-avds
   ```

   You should see output similar to:

   ```
   Pixel_6_API_33
   ```

4. Start the emulator by specifying the AVD name:

   ```
   ./emulator -avd Pixel_6_API_33
   ```

   Replace `Pixel_6_API_33` with the name of the AVD you want to launch.

Now the selected emulator should start, and you can begin using it without opening Android Studio.
