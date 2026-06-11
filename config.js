// ─────────────────────────────────────────────────────────────────────────────
//  Park Tree Map — configuration
//
//  This is the ONLY file you need to edit when setting up your map.
//  Replace the placeholder values below with the ones for your park.
//
//  See docs/04-configure-app.md for step-by-step instructions.
// ─────────────────────────────────────────────────────────────────────────────

// — Your park —
// PARK_NAME is just the park's name (e.g. 'Lillie Park'). The app appends
// " tree map" where it needs the full title.
const PARK_NAME        = 'Lillie Road Recreation Ground';
const PARK_DESCRIPTION = 'A lovely park in Hammersmith & Fulham. Proudly cared for by the Friends of Lillie Road Recreation Ground';
// Optional. Leave as '' to hide the email contact from the Info panel
// and the feedback "Send email instead" link.
const CONTACT_EMAIL    = '';

// Optional. Your park or Friends-group website. Shown as a link in the
// Info panel. Leave as '' to hide.
const WEBSITE_URL      = '';

// — Your Google Sheet —
// The long ID between /d/ and /edit in the spreadsheet URL.
const SHEET_ID         = '1DDFuJSrnvYSvESz4u42tG_qzNX4g5b6FYA4_EdRgDaM';
const SHEET_NAME       = 'Park-trees Template (G-Doc)';

// — Your Apps Script Web App —
// The "/exec" URL you got after deploying the Apps Script.
const APPS_SCRIPT_URL  = 'https://script.google.com/macros/s/AKfycbzuHDTx1XsbLCiG3SkVvQhXibZXiSQPwZvL7A6bCFAmW_hyI1wTomPR5chQzlw62IVYOg/exec';

// — Your GitHub repository —
// "owner/repo" — used to fetch uploaded photos.
const GITHUB_REPO      = 'Boonoit/Reposi-tree';
const GITHUB_BRANCH    = 'main';

// — Fallback map view —
// Only used until your sheet has at least one tree. Once it does, the map
// auto-fits to your trees and these values are ignored.
const MAP_CENTER       = [51.482557, -0.217374]; // [latitude, longitude]
const MAP_ZOOM         = 17;

// — Trusted contributors —
// When true (default), the "+ Add a tree" button is hidden until a visitor
// enrols their device via a magic link — the standard recommended setup,
// so random visitors can't add trees or upload photos. Set to false if you
// instead want the map fully open (anyone with the URL can add trees).
// See docs/12-trusted-contributors.md.
const ENABLE_CONTRIBUTOR_GATE = true;
