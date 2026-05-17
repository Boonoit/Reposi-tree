# Improve the base map (OpenStreetMap)

The map's underlying *Street map* layer is OpenStreetMap (OSM), a community
project that anyone can edit. If your park is missing paths, benches, gates,
or buildings, you can add them yourself — and they'll appear on your tree
map (and on millions of other apps that use OSM) within a day.

This is **completely optional** and **completely separate** from your tree
map. Improving OSM doesn't change anything in your repository or spreadsheet.

## Quick edits

1. Go to <https://www.openstreetmap.org> and find your park.
2. Click **Edit** (top left). This opens the iD editor in your browser.
3. The first time, sign up for a free OSM account.
4. iD has a built-in walkthrough — click *Start the Walkthrough* in the
   bottom-right help panel.

Things worth adding for a park map:

- **Paths**: tag as `highway=footway` or `highway=path`.
- **Park boundaries**: ensure your park is mapped as a `leisure=park`
  polygon.
- **Benches**: `amenity=bench`.
- **Bins**: `amenity=waste_basket`.
- **Drinking water**: `amenity=drinking_water`.
- **Trees as a group**: if you have an avenue, a `natural=tree_row` line
  works well. Individual trees can be mapped with `natural=tree` — but you
  probably don't need to, since your own tree map already tracks them.

## Etiquette

- Make small, accurate edits. Don't import data from other maps unless their
  licence permits it.
- Use the changeset comment to describe what you changed (e.g. *"Added
  benches along main path in Lillie Park"*).
- Don't worry about getting it perfect on the first edit — other OSM
  contributors will refine and correct as needed.

## Resources

- [OSM beginner's guide](https://wiki.openstreetmap.org/wiki/Beginners%27_guide)
- [Map features reference](https://wiki.openstreetmap.org/wiki/Map_features)
- [LearnOSM](https://learnosm.org/en/) — free training material
