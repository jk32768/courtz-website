# Running a Session

This section explains how to start a CourtZ session.

You can start a session in one of two ways:

- Using a Session Profile
- Without a Session Profile

Once the session has started, both workflows operate in the same way.

---

## Starting with a Session Profile

Session Profiles provide a quick way to start regular club sessions.

Each Session Profile already contains:

- the players who normally attend
- the game settings for the session

To start a session, open the selector on the **Games** page and choose the required **Session Profile**. To prepare attendance in advance without starting play, tap the profile on **Sessions** and choose **Prepare Attendance**.

The **Attendance** dialog is displayed.

Use the Attendance dialog to prepare today's session by:

- selecting the regular players who are attending
- clearing players who are absent
- adding players from the master player list
- adding guest players
- optionally setting the Expected Games for attending players

When adding existing players, tap names in **Available** to move them to **Added**, then select **Done** to include them in attendance. Tap an added player to return them, or select **Cancel** to discard the additions. Search and group filters affect Available only; see [Selecting Players](02-players.md#selecting-players).

When the player list is complete, select **Start Session**.

<img src="images/attendance-start.png?v=4.0.0"
     alt="Play Session attendance dialog with selected and absent players and the Start Session button"
     width="400">

*Use the Attendance dialog to select the players attending today's session. Greyed-out players are currently marked as absent.*

CourtZ creates today's session and allocates players to the available courts. If there are more players than available court spaces, the remaining players are placed in the Waiting Room.

### Expected Games

You can optionally specify how many games an attending player expects to play.

Tap a player's status icon to set or adjust their Expected Games.

- **Tick** – the player is attending.
- **Stopwatch** – the player has an Expected Games value set.

Expected Games can be set to **1**, **2**, **3**, **4** or **Any** (expected number of games is unspecified).

Players with an Expected Games target are prioritised during round generation to help them reach their expected number of games. When a player reaches their target, CourtZ provides the option to remove them before the next round is generated.

### Guest Players

Guest players added from the Attendance dialog become part of today's session.

If they are likely to play again, you can also:

- add them to the master player list
- add them to the current Session Profile

This allows them to be included automatically in future sessions that use this Session Profile.

---

## Starting without a Session Profile

If you are not using a Session Profile, you create today's session directly from the **Games** page.

Choose the required game settings, then add players to the Waiting Room:

- Select the add-player icon <span class="material-symbol" role="img" aria-label="Add players">&#xe7fe;</span> to choose players from the master list.
- Select **+Guest** to add a guest player for this session.

When everyone has been added, select the <span class="nav-icon">+</span> icon to generate the first round of games.

CourtZ creates today's session and allocates players to the available courts. If there are more players than available court spaces, the remaining players stay in the Waiting Room.

When a session is started without using a Session Profile, the session name displays as **`<no profile selected>`**. This indicates that the session is using the default game settings rather than those stored in a Session Profile.

Players can be added directly to the Waiting Room from the master player list or as guest players before play begins.

<img src="images/unsaved-session.png"
     alt="Session started without a Session Profile"
     width="900">

*A session started without using a Session Profile. Players can be added to the Waiting Room before the first games are generated.*

### Guest Players

Guest players can be added directly to the Waiting Room.

If they become regular players, you can add them to the master player list so they are available for future sessions.

---

## The Waiting Room

The Waiting Room contains players who are waiting to be allocated to a court.

Players are placed in the Waiting Room automatically when:

- there are more players than available court spaces
- they are waiting for their next game
- they are added after the session has started

CourtZ uses the Waiting Room whenever new games are generated, automatically moving waiting players onto available courts.

<img src="../images/CourtZGamesPage.png?v=4.1.1"
     alt="Play Session with four players in the Waiting Room above four occupied courts"
     width="900">

*The Waiting Room contains players waiting for their next game. As courts become available, CourtZ automatically selects players from the Waiting Room when generating the next round.*

### Removing a Player from the Waiting Room

If a player leaves the session before being selected for a game, they can be removed directly from the Waiting Room.

To remove a player:

1. Tap the player's name in the Waiting Room.
2. Choose **Leave session** from the player menu.
3. Confirm the removal.

For a player on court, choose **Leave after this round** instead. To replace them immediately, swap them with a waiting player first, then remove them from the Waiting Room.

The **Undo** icon and count at the right of the session selector strip let you reverse changes made during the current round.

Removing a player from the Waiting Room affects only the current session. The player remains in the master player list and in any Session Profiles to which they belong.

---

## What's Next?

Your session is now running.

Continue to **Game Generation** to learn how CourtZ generates games, rotates players between courts and the Waiting Room, and keeps play balanced throughout the session.

---

← [Session Profiles](03-session-profiles.md) | [🏠 Help Home](00-index.md) | [Game Generation →](05-game-generation.md)
