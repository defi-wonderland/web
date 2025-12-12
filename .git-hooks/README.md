# Git Hooks

This directory contains Git hooks for the project.

## Installation

After cloning the repository or pulling these hooks, run:

```bash
.git-hooks/install.sh
```

Or add it to your npm workflow:

```bash
npm run install-hooks
```

**Note:** Hooks are automatically installed when you run `npm install` or `yarn install` thanks to the `postinstall` script.

## Available Hooks

### pre-commit

Automatically optimizes images before committing.

**What it does:**
1. Runs `npm run optimize-images` on all images in `public/img/`
2. If any images are optimized, adds them to the current commit automatically
3. Proceeds with the commit

**Benefits:**
- Images are optimized as part of your commit (cleaner history)
- No extra commits created
- Works with GPG signing
- Faster than pre-push (only optimizes changed images)

**To skip (not recommended):**
```bash
git commit --no-verify
```

## Notes

- These hooks are stored in `.git-hooks/` (version controlled)
- They need to be installed to `.git/hooks/` to work (not version controlled)
- Team members get hooks automatically installed after `npm install` or `yarn install`
- The hook only processes images larger than 500KB
