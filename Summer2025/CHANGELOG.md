# Changelog

## [1.0.2] -  2025-08-11
### Added
- Created `CHANGELOG.md` file to track updates.
  - **Affected files:**
    - `CHANGELOG.md`

### Changed
- Rewrote IP request from **jQuery** to native **Fetch API** for reduced dependencies.
  - **Affected files:**
    - `assets/js/ip.js`
    - `index.html`

### Removed
- Removed Google-hosted jQuery script (no longer needed after Fetch migration).
  - **Affected files:**
    - `index.html`
    - `assets/js/ip.js`
