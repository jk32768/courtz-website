# Session Profiles

The **Sessions** tab lists **Play Sessions** and **Tournaments**. Play Session profiles remember the players and settings for your club sessions. For competition formats and scoring, see the [Tournament Mode guide](12-tournaments.md).

A Session Profile stores:

- the regular players for the session
- the most recently recorded attendance
- the game settings used to generate games

It does not store copies of player information. Instead, it refers to players in the master player list.

This means that if you update a player's name or Skill Level on the **Players** page, every Session Profile using that player automatically uses the updated information.

<img src="../images/SessionProfilesPage.png?v=4.0.0"
     alt="Session Profiles page"
     width="900">

*The Session Profiles page showing the available Session Profiles and the number of players assigned to each profile.*

---

## Creating a Session Profile

To create a Session Profile:

1. Open the **Sessions** tab.
2. Select the <span class="material-symbol" role="img" aria-label="Add Session Profile">&#xE145;</span> icon beside **Play Sessions**.
3. Enter a name for the Session Profile.
4. Select the regular players.
5. Choose the game settings.
6. Save the Session Profile.

Select the add-player icon in the profile editor to open **Select Players**. Tap players in **Available** to move them into **Added**, then select **Done**. You can tap an added player to return them before confirming. Search and group filters apply only to Available; see [Selecting Players](02-players.md#selecting-players).

<img src="images/edit-session-profile.png?v=4.0.0"
     alt="Session Profile editor"
     width="700">

*The Session Profile editor is used to define the regular players and default game settings for a session.*

The Session Profile is now available whenever you start a new session.

---

## Deleting a Session Profile

To delete a Session Profile:

1. Open the **Sessions** tab and tap the profile.
2. Choose **Delete** from the menu.
3. Confirm deletion, or select **Cancel** to keep the profile.

Deleting a Session Profile removes only the profile. Players remain in the master player list.

The same tap menu offers **Edit** and **Prepare Attendance** for both Play Session and tournament profiles.

---

## Session Settings

Each Session Profile stores the default settings used whenever a new session is started.

These include:

- **Number of courts** – the number of courts available for play.
- **Format** – whether games are generated as Singles or Doubles.
- **Team Skills** – determines how CourtZ balances player abilities when generating games.
    - **Balanced** attempts to make both teams equally matched by keeping the total Skill Levels of each team as close as possible.
    - **Competitive** attempts to group players of similar Skill Levels together, creating games where all players are of a comparable standard.
- **Mixed Games** – whether CourtZ should prefer mixed-gender games when suitable players are available.
- **Game Duration** – the target length of each game before the next round is generated.

These settings are used automatically whenever the Session Profile is started.

If required, they can be temporarily changed during a session using **Options** (⋮). Temporary changes affect only the current session and do not modify the Session Profile.

---

## Managing Players

Session Profiles contain references to players in the master player list.

You can:

- add players to the Session Profile
- remove players from the Session Profile

Player details such as names and Skill Levels are managed on the **Players** page.

### Removing Players from a Session Profile

To remove a player:

1. Tap the profile on **Sessions** and choose **Edit**.
2. Tap the player's name inside the editor and choose **Remove**.
3. Select **Save** to keep the updated profile, or **Cancel** to discard your profile edits.

Removing a player from a profile does not delete their master player record or remove them from other profiles.

Any changes made to a player's details are automatically reflected in every Session Profile that includes that player.

---

## Preparing Attendance

Attendance can be recorded before arriving at the venue.

Each Session Profile displays an Attendance indicator showing the number of players currently marked as attending and the total number of players in the profile (for example, **15/20**).

On the **Sessions** tab, tap a profile and choose **Prepare Attendance** to open the Attendance dialog. The blue attendance icon <span class="material-symbol" role="img" aria-label="Attendance">&#xF233;</span> and count show how many players are selected. Select the players expected to attend, then save the attendance.

<img src="../images/Attendance.png?v=4.0.0"
     alt="Attendance popup"
     width="400">

*This example has all 20 players selected. Greyed-out players would be absent; select **Save** to keep the attendance. A stopwatch indicates an Expected Games value.*

Use Select All or Clear All to quickly mark every player as attending or absent before making individual changes.

### Expected Games

You can optionally specify how many games an attending player expects to play.

Tap a player's status icon to set or adjust their Expected Games.

- **Tick** – the player is attending.
- **Stopwatch** – the player has an Expected Games value set.

Expected Games can be set to **1**, **2**, **3**, **4** or **Any** (expected number of games is unspecified).

Players with an Expected Games target are prioritised during round generation to help them reach their expected number of games. When a player reaches their target, CourtZ provides the option to remove them before the next round is generated.

The attendance list can be updated whenever players confirm or cancel before the session begins.

---

## Starting a Session

To start a session:

1. Open the **Games** page.
2. Select the required Session Profile.
3. Review today's attendance and make any final changes if required.
4. Select **Start Session**.

CourtZ automatically generates the first round of games using the Session Profile settings and the players marked as attending.

---

## Updating a Session Profile

Session Profiles can be edited whenever your regular session changes.

Tap the profile on **Sessions** and choose **Edit**.

For example, you might:

- add new regular players
- remove players who no longer attend
- change the number of courts
- adjust the game duration
- change the preferred game mode

Select **Save** in the profile editor to keep your changes. They are used the next time the Session Profile is started. Select **Cancel** to close the editor without saving your edits.

---

## Additional Options

Select **Options** (⋮) to access additional actions for the Session Profiles page.

**Delete All Play Session Profiles** removes all Play Session profiles and their saved attendance and sessions. **Delete All Tournaments** removes tournament profiles, prepared attendance and saved tournament results.

This does not affect the master player list.

Existing player records remain available to create new Session Profiles.

---

## Tips

> **Tip:** Create separate Session Profiles for different days, venues or groups of players. Each profile remembers its own players and default game settings.

> **Tip:** Recording attendance before arriving at the venue allows games to be generated immediately when the session starts.

---

## Related Topics

- Players
- Running a Session
- Game Generation
- Options

---

← [Players](02-players.md) | [🏠 Help Home](00-index.md) | [Running a Session →](04-running-a-session.md)
