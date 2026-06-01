# Designer Runbook — Make a UI tweak with AI

This lets you change how the Unleash UI looks, see it live, and open a pull
request for an engineer to review — all in your browser, no setup.

## 1. Open the workspace

1. Go to the repository on GitHub.
2. Click the green **Code** button → **Codespaces** tab → **Create codespace**.
3. Wait ~2–3 minutes the first time (it's installing things). A browser-based
   VS Code opens, and a preview of the Unleash app appears on the right (the
   **"Unleash UI preview"** tab). The app lives at the **`/pro/`** address — if you
   see a blank page, add `/pro/` to the end of the preview URL.

## 2. Log in to the app preview

The preview talks to the real **sandbox** Unleash instance, so log in with the
shared sandbox account when prompted. Then navigate to the screen you want to
change (e.g. open the **New feature flag** dialog).

## 3. Describe your change to the assistant

1. Open the **Claude** panel (left sidebar in VS Code).
2. Type what you want in plain language, e.g.:
   - *"On the create-flag dialog, make the modal about 20% narrower."*
   - *"Add more space between the title and the dropdowns."*
   - *"Make the impression data label a bit larger."*
3. The assistant edits the code; within a second the **preview updates** so you
   can see the result. Not quite right? Just say so — *"a little less"*, *"more
   padding above"* — and it adjusts.

## 4. Open the pull request

When you're happy, say: **"Open a PR with these changes."** The assistant runs the
checks and creates a pull request that includes your request and the change. Share
the PR link with your engineer — the change is already made, ready to review.

## Notes

- The assistant only makes **visual** changes (spacing, size, color, type, copy).
  If you ask for something that needs deeper logic, it'll tell you it can't and
  why — that's expected.
- Nothing you do here affects the live product until an engineer reviews and
  merges the pull request.
- When you're done, stop the Codespace (it stops on its own after a while too):
  GitHub → your Codespaces → **Stop**.
