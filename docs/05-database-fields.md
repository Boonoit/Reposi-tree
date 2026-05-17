# Database fields

Every tree is one row in the `Trees` worksheet of your Google Sheet. Each row
has a set of columns — most are optional. You can edit them directly in the
spreadsheet at any time, and the map will pick up your changes within a
minute or two (after a refresh).

## Columns

| Column                | What it's for                                                                                                       |
|-----------------------|---------------------------------------------------------------------------------------------------------------------|
| **Ref**               | Unique reference for each tree. **Auto-filled by a sheet formula** — don't type into this column.                   |
| **Number**            | A human-friendly number you assign to trees (e.g. an inventory number). Optional.                                   |
| **Scientific name**   | e.g. `Quercus robur`. The first word is the *genus*; the map colours each genus distinctly.                         |
| **Common name**       | e.g. `English oak`.                                                                                                 |
| **Short name**        | A shorter alternative for filtering, e.g. `Oak`.                                                                    |
| **Other names**       | Any other names you want to show in the popup.                                                                      |
| **Latitude**          | A decimal latitude. The "Add a tree" flow fills this in for you.                                                    |
| **Longitude**         | A decimal longitude. Same.                                                                                          |
| **Notes**             | Free-text observations.                                                                                             |
| **Tags**              | Comma-separated tags. See *Special tags* below.                                                                     |
| **Year planted**      | Used to display the tree's age.                                                                                     |
| **Est. year planted** | Estimated planting year, when the actual year isn't known.                                                          |
| **Year died**         | If set, the age calculation uses this as the end year instead of the current year.                                  |
| **Form**              | e.g. *Standard*, *Multi-stem*, *Shrub*. Drives the *Form* filter.                                                   |
| **Condition**         | e.g. *Good*, *Fair*, *Poor*, *Dead*. Drives the *Condition* filter.                                                 |
| **Wikipedia**         | Full URL to the species' Wikipedia page. Shown as a link in the popup.                                              |
| **TSO**               | Full URL to the species' page on [Trees and Shrubs Online](https://www.treesandshrubsonline.org).                   |
| **Identification**    | One or more comma-separated URLs that helped identify the tree.                                                     |
| **Months**            | Comma-separated month names when this tree has visible seasonal interest (e.g. `Apr, May` for blossom).             |
| **Google Maps link**  | A link to the location on Google Maps. **Auto-filled by a sheet formula** — don't type into this column.            |
| **Photos**            | Comma-separated photo references. See *Photos* below.                                                               |

## Special tags

The `Tags` column understands a few values specially:

- **`New`** — any tag containing the word "New" (e.g. `New`, `New 2025`,
  `New 2026`) gives the tree a distinctive diamond-shaped marker and gets it
  its own filter group called *New trees*. The year suffix is optional but
  recommended — it lets you filter and celebrate new plantings by year.
- **`Native`** — if any tree in your sheet has this tag, the *Other* filter
  group gets an extra *"Non-native (hide)"* option that hides trees with the
  `Native` tag. Useful for groups documenting non-native pressure.
- **`Self-sown`** — same idea: adds a *"Hide self-sown"* option to the
  *Other* filters.
- **`TBC`** — the tree's marker becomes a question mark (still working out
  what species it is).
- **`Highlight`** — the marker becomes a star (a tree you want visitors to
  notice).
- **`Dead`** condition — if the tree's `Condition` is `Dead`, the marker
  becomes a grey square regardless of any other tags.

All of these are case-insensitive and based on whole-word matching, so
`Renewed` won't accidentally match `New`.

## Photos

The `Photos` column accepts a comma-separated list of values. Two forms work:

- **A full URL** — `https://example.com/my-tree.jpg`. Useful if you already
  host photos somewhere (e.g. Google Photos shared links).
- **A repo-hosted path** — `photos/t-abc123-1.jpg`. The map resolves this
  against your repository. Photos uploaded via the *"Add a tree"* form
  produce values in this form automatically — you don't usually need to type
  them yourself.

You can mix both kinds in one cell.

## "Don't touch these"

The `Ref` and `Google Maps link` columns are powered by formulas baked into
the template spreadsheet. They use `Latitude` and `Longitude` and update
themselves.

If you ever see new rows appearing **without** a Ref or Google Maps link,
the formula has been overwritten somewhere. Fix:

1. Find the topmost row that still has the formula working.
2. Click the cell, copy it, and paste it down across the broken rows.

If even row 2 is broken, copy the formula from the original template sheet.

## Adding columns of your own

If you want to track something the template doesn't have — say, *Sponsor* or
*Memorial dedication* — just add a new column. The map ignores columns it
doesn't recognise, so it won't break anything. You can also display them in
your own way later by editing the popup logic in `index.html` (see
`buildPopup` near the middle of the file).
