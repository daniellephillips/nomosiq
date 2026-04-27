# Token Migration Plan

## Purpose
Normalize the marketing site design system before refactoring page sections or downloading any new theme.

## Context
- Repo: `nomosiq`
- Branch: `chore/ui-normalization`
- UI stack: `shadcn/ui`
- Goal: clean up design-system drift without redesigning the site

## Problems to Solve
- Too many custom color tokens
- Overlapping surface/background tokens
- Badge/tag styles reused as content containers
- Inconsistent text and border semantics
- Extra token aliases that make the system harder to maintain

## Files in Scope
- `src/index.css`
- `src/pages/home.tsx`
- `src/components/ui/*`

## Rules
- Prefer semantic tokens over one-off visual tokens
- Keep changes incremental and easy to review
- Do not remove live tokens until replacements are complete
- Do not redesign sections during token cleanup
- Do not install a new theme during this pass

## Safe to Remove Now
- `--radius-card`
- `--radius-button`

## Safe to Replace Immediately
- `bg-surface-2` → `bg-card`

## Replace Next, With Visual Review
- `border-border-subtle` → `border-border`
- `text-text-soft` → `text-muted-foreground`
- `text-text-subtle` → `text-muted-foreground`

## Keep for Now
- `bg-surface-1`
- `bg-surface-3`
- `text-text-body`
- `success-muted`
- `success-border`
- `warning-muted`
- `warning-border`
- `radius-panel`

## Later Cleanup
- `body` / `body-secondary` aliases
- `surface-1` / `surface-3` if they can be merged safely
- `chart-*` tokens if unused
- `sidebar-*` tokens if unused
- component-level class drift in badges, cards, and panels

## Component Role Cleanup
### Badge
- Metadata only
- Single-line where possible
- Never used as a full content container

### Card
- Real content container
- Can hold title, body, icon, and actions
- Should not visually read like a tiny tag

### Panel
- Denser content block
- Used for product/workflow/security layouts
- Should remain distinct from badges

## Migration Order
1. Remove dead tokens
2. Replace duplicate live tokens with identical values
3. Normalize border token usage
4. Normalize text token usage
5. Reclassify badge/card/panel usage
6. Clean up remaining unused tokens

## Phase 1 Implementation
- Remove unused radius tokens
- Replace `bg-surface-2` with `bg-card`
- Do not touch `surface-1`, `surface-3`, success/warning tokens, or section structure yet

## Visual Review Checklist
- No major change to overall look and feel
- Cards still read as cards
- Badges still read as badges
- Contrast remains acceptable
- Hero, workflow, and security sections still feel consistent

## Done for This Pass
- [ ] Dead tokens removed
- [ ] Duplicate `surface-2` usage replaced
- [ ] Diff reviewed
- [ ] Site preview checked
- [ ] Ready for phase 2