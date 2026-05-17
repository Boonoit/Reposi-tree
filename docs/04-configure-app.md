# 4. Configure the app

This is where you tell the web page about your park, your spreadsheet, and
your Apps Script. It's a small block of text near the top of `index.html`.

You can do **everything** in the GitHub web UI — no need to download
anything or open a terminal.

## 4.1 Open `index.html` for editing

1. In your forked repository on GitHub, click **`index.html`** in the file list.
2. Click the **pencil icon** (top right of the file viewer) to edit.

## 4.2 Find the `CONFIGURATION` block

Scroll until you see a clearly-marked block near the top of the inline
`<script>`. It looks like this:

```js
// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURATION  — edit these values to match your park.
// See docs/04-configure-app.md for full instructions.
// ─────────────────────────────────────────────────────────────────────────────
const PARK_NAME        = 'Park Tree Map';
const PARK_SHORT_NAME  = 'Park Trees';
const PARK_DESCRIPTION = 'A map of the trees in our park.';
const CONTACT_EMAIL    = 'friends@example.org';

const SHEET_ID         = 'PASTE_YOUR_SHEET_ID_HERE';
const SHEET_NAME       = 'Trees';

const APPS_SCRIPT_URL  = 'PASTE_YOUR_APPS_SCRIPT_URL_HERE';

const GITHUB_REPO      = 'owner/repo';
const GITHUB_BRANCH    = 'main';
const GITHUB_PHOTOS_BASE_URL =
  `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/photos/`;

const MAP_CENTER       = [51.5074, -0.1278];
const MAP_ZOOM         = 17;
```

## 4.3 Fill in your values

Replace the placeholder text on the right of each `=`, keeping the **quotes**
around strings exactly as they appear. Don't touch anything outside the
CONFIGURATION block.

| Field                | What to put                                                |
|----------------------|------------------------------------------------------------|
| `PARK_NAME`          | The full name of your park, e.g. `'Lillie Park'`.          |
| `PARK_SHORT_NAME`    | A short version (used in the install banner).              |
| `PARK_DESCRIPTION`   | One sentence — shown to people installing the app.         |
| `CONTACT_EMAIL`      | Where feedback emails should go.                           |
| `SHEET_ID`           | The long ID from step 1.3.                                 |
| `SHEET_NAME`         | Leave as `'Trees'` unless you renamed the worksheet.       |
| `APPS_SCRIPT_URL`    | The `/exec` URL from step 3.4.                             |
| `GITHUB_REPO`        | `'your-username/my-park-trees'` from step 2.4.             |
| `MAP_CENTER`         | Only matters before you add your first tree. See below.    |
| `MAP_ZOOM`           | 17 is a sensible park-scale default.                       |

### About `MAP_CENTER`

`MAP_CENTER` is **only used when the spreadsheet has no trees yet**. As soon
as you've added one tree, the map auto-fits to your data and `MAP_CENTER` is
ignored.

If you don't know your park's coordinates, you can leave the default for now,
add your first tree using the *"Use my current location"* button (or by
clicking on a satellite-view map elsewhere), then come back and update
`MAP_CENTER` later if you want a specific framing.

If you do want to set it now: open <https://www.openstreetmap.org>, find your
park, right-click in the centre and choose *Centre map here*. The URL bar
will then show `…?mlat=51.4807&mlon=-0.2158…` — those are your latitude and
longitude. Use them as `[51.4807, -0.2158]`.

## 4.4 Save your changes

Scroll to the bottom of the file editor:

- **Commit message**: e.g. *"Configure for My Park"*.
- Leave **"Commit directly to the `main` branch"** selected.
- Click **Commit changes**.

GitHub Pages will rebuild within ~30 seconds.

## 4.5 Update `manifest.json`

Same process for `manifest.json` — open it in GitHub, click the pencil, and
update the `"name"`, `"short_name"`, and `"description"` to match.

(`"background_color"` and `"theme_color"` are the colours that show during
the splash screen when someone installs your app — pick whatever fits your
park's branding, or leave the defaults.)

## 4.6 Replace the icons (optional)

The `icons/` folder contains placeholder icons. To use your own:

1. Create a square PNG at **192×192** and another at **512×512**.
2. In GitHub, navigate to `icons/`, click **Add file → Upload files**, drop
   in your new files named `icon-192.png` and `icon-512.png`.

A free tool like [favicon.io](https://favicon.io/) can generate these from
text or an image.

## 4.7 Visit your map

Open your live URL (`https://your-username.github.io/my-park-trees/`). You
should see your park's name in the welcome panel.

## Next

→ [Step 5: Add your first tree](07-add-trees.md)
