# Configuration

A CourtZ configuration allows players, Session Profiles and application settings to be transferred between devices, shared with other organisers or saved as a backup.

A complete configuration includes:

* The master player list
* All Session Profiles
* Application settings

You can also export or share selected Session Profiles without transferring the entire configuration.

---

## Exporting or Sharing a Configuration

The steps depend on whether you are using CourtZ on Windows or Android.

### Windows

On Windows, select **Export Configuration** from the **Options** menu.

CourtZ saves the configuration file to your **Downloads** folder.

To share the file with another organiser:

1. Open **File Explorer** and go to **Downloads**.
2. Find the exported CourtZ configuration file.
3. Right-click the file and select **Share**.
4. Choose an available sharing option, such as WhatsApp or another supported app.

You can also copy the file to a USB drive or attach it to an email.

### Android

On Android, select **Share Configuration** from the **Options** menu.

CourtZ opens the Android sharing options, allowing you to choose an available app or sharing method. The options shown depend on the apps installed on your device.

For example, you can share a configuration using WhatsApp or email, or use another available sharing option.

### What Can Be Shared?

You can export or share:

* The complete configuration
* Selected Session Profiles

When selected Session Profiles are exported or shared, the players required by those profiles are included automatically.

Configuration files can be used to:

* Create a backup
* Transfer a configuration to a new device
* Share selected sessions with another organiser
* Share a complete club configuration

---

## Understanding Configuration Filenames

CourtZ gives exported configuration files descriptive filenames to help you identify what they contain.

* **Complete configuration:** `CourtZ-Configuration-DD-MM-YYYY.json`
* **One Session Profile:** `CourtZ-ProfileName-DD-MM-YYYY.json`
* **Multiple Session Profiles:** `CourtZ-Session-Profiles-DD-MM-YYYY.json`

The date indicates when the file was exported, in day-month-year format.

For example, `CourtZ-Configuration-27-10-2026.json` is a complete configuration exported on 27 October 2026.

A single-profile export includes the Session Profile name in the filename, so the actual name will depend on the profile you selected.

Configuration files use the `.json` file extension. Keep this extension when sharing or saving the file.

**Tip:** You do not need to rename the file before importing it into CourtZ.

---

## Receiving a Configuration Through WhatsApp

When another organiser sends you a CourtZ configuration through WhatsApp, you need to make sure the file is accessible from your device's file system before importing it into CourtZ.

### Windows

1. Open WhatsApp and download the configuration file if necessary.
2. Open **File Explorer** and go to **Downloads**, or the folder where you saved the file.
3. Find the CourtZ configuration file.
4. Open CourtZ and follow the instructions in [Importing a Configuration](#importing-a-configuration).

If you cannot find the file, check your recent downloads or use File Explorer to search for it.

### Android

CourtZ cannot import a configuration directly from the WhatsApp conversation. First, download the file and locate it using your phone's file manager.

1. Open the WhatsApp conversation containing the configuration file.
2. Tap the attached file to download it if necessary.
3. Open your phone's file manager. This may be called **My Files**, **Files** or **Files by Google**, depending on your device.
4. Check **Recent** and **Downloads** for the configuration file.
5. If you cannot find it, check WhatsApp's documents folder. On some devices, this may be under:

   `Internal storage/Android/media/com.whatsapp/WhatsApp/Media/WhatsApp Documents`

   The location can vary by device, WhatsApp version and whether you use standard WhatsApp or WhatsApp Business.
6. If necessary, use your file manager's copy or move option to put the configuration file in **Downloads**, where it is easier to find.
7. Open CourtZ and follow the instructions in [Importing a Configuration](#importing-a-configuration).

If you still cannot find the file, use your file manager's search option to look for the filename or check the folders where downloaded documents are stored.

> **Tip:** Add your phone's file manager to your Home screen for easier access. On many Android phones, you can do this by opening the Apps screen, pressing and holding the file manager icon, and selecting **Add to Home** if available, or dragging the icon onto the Home screen. On Samsung phones, the app is usually called **My Files**.

---

## Importing a Configuration

Once the configuration file is accessible on your device:

1. Open CourtZ.
2. Open the **Options** menu.
3. Select **Import Configuration**.
4. Use the file picker to locate and select the configuration file. On Android, check **Downloads** if you saved or copied the file there.
5. Choose how you want the imported data to be applied.

CourtZ provides the following import options:

* **Replace** – replaces the current CourtZ configuration with the imported configuration.
* **Merge** – keeps existing players and profiles, adds or updates imported players, and merges imported profiles with matching profiles.
* **Selected Profiles** – imports only the Session Profiles you choose, together with the players required by those profiles.

CourtZ validates imported files and reports an error if the selected file is not a valid CourtZ configuration.

After a successful import, the imported data is available in CourtZ.

> **Important:** The **Replace** option replaces all existing players and Session Profiles with the imported configuration. This cannot be undone. Export your current configuration first if you want to keep a backup.

> **Tip:** If you only need particular sessions from another organiser, use **Selected Profiles** rather than replacing your entire configuration.

---

## Working with Multiple Organisers

If more than one organiser manages your club sessions, configurations provide a convenient way to share players and Session Profiles between devices.

For example, you might:

* Share selected Session Profiles with another organiser.
* Export a complete configuration as a backup.
* Transfer a configuration to a new device.
* Import changes received from another organiser.

When several organisers make changes independently, the **Merge** option can help combine their configurations. Imported players may be added or updated, and matching Session Profiles are merged.

Review the imported data carefully, particularly when several organisers maintain their own copies of the configuration.

---

## Tips

> **Tip:** Regularly export your complete configuration to create a backup before making significant changes.

> **Tip:** Use selected Session Profile export or sharing when you only need to transfer specific sessions rather than your entire configuration.

> **Tip:** On Windows, exported configuration files are saved in **Downloads**. Right-click the file and select **Share** to send it using an available app.

> **Tip:** On Android, save or locate a configuration received through WhatsApp in your phone's file system before selecting it through CourtZ's **Import Configuration** option.

> **Tip:** Keep the `.json` file extension when sharing configuration files. You do not need to rename files before importing them.

> **Tip:** Choose the import option carefully. **Replace** replaces your current configuration, while **Merge** and **Selected Profiles** let you bring data into your existing configuration.

---

## What's Next?

Continue to **Glossary** for explanations of the terms used throughout CourtZ.

---

← [Options](08-options.md) | [🏠 Help Home](00-index.md) | [Glossary →](10-glossary.md)
