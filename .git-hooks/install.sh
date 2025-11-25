#!/bin/sh

# Install Git hooks from .git-hooks/ to .git/hooks/
echo "📦 Installing Git hooks..."

# Get the directory where this script is located
HOOKS_DIR="$(cd "$(dirname "$0")" && pwd)"
GIT_HOOKS_DIR="$(git rev-parse --git-dir)/hooks"

# Copy pre-commit hook
cp "$HOOKS_DIR/pre-commit" "$GIT_HOOKS_DIR/pre-commit"
chmod +x "$GIT_HOOKS_DIR/pre-commit"

echo "✅ Git hooks installed successfully!"
echo ""
echo "Installed hooks:"
echo "  • pre-commit (optimizes images before committing)"
echo ""
echo "To skip validation, use: git commit --no-verify"
