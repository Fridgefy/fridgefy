# Contributing

## Table of Contents

- [Contributing](#contributing)
  - [Table of Contents](#table-of-contents)
  - [Branching Rules](#branching-rules)
    - [Types of Branches](#types-of-branches)
    - [Branch Naming Conventions](#branch-naming-conventions)
      - [Examples](#examples)
  - [Commit Convention](#commit-convention)
  - [Steps to make a Pull Request](#steps-to-make-a-pull-request)

## Branching Rules

### Types of Branches

- `main`: For production use. Only accepts PRs from `develop` (and `hotfix` in emergencies).
- `develop`: Accepts PRs from `feature` branches.
- `feature/`: Branches for developing new features or improvements.
- `hotfix/`: Branches for urgent fixes.
- `docs/`: Branches for documentation updates.

### Branch Naming Conventions

- Feature Addition: `feature/<issue_number>-<brief_description>` (develop ⇔ feature)
- Hotfix: `hotfix/<issue_number>-<brief_description>` (main ⇔ hotfix)
- Documentation Update: `docs/<issue_number>-<brief_description>` (develop ⇔ docs)

_Note: `<issue_number>-` can be omitted if the modification is not based on an issue._

#### Examples

- feature/42-user-authentication
- hotfix/56-security-vulnerability-fix
- docs/108-update-installation-guide

<!-- ## Testing

- Write unit tests for your features.
- Make sure all tests pass locally and on the CI server.
- Update existing tests if you modify code that affects them. -->

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

## Steps to make a Pull Request

1. Create a new branch from the `develop` branch, or from the `main` branch if you're working on a hotfix.
2. Follow the [Branch Naming Conventions](#branch-naming-conventions) while naming your branch.
3. Work on your changes locally.
4. Commit your changes, ensuring to follow the project's [commit message conventions](#commit-convention).
<!-- 5. Ensure that all [tests](#testing) pass. -->
5. Push your branch to the repository.
6. Create a Pull Request against the original branch you branched from.
7. Await code review, and address any comments as necessary.
