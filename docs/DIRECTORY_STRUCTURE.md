# Project Directory Structure

## Directory Structure Overview

- [Project Directory Structure](#project-directory-structure)
  - [Directory Structure Overview](#directory-structure-overview)
    - [`app/`](#app)
    - [`components/`](#components)
    - [`components/layouts/`](#componentslayouts)
    - [`components/pages/`](#componentspages)
    - [`components/parts/`](#componentsparts)
    - [`components/ui/`](#componentsui)
    - [`actions/`](#actions)
    - [`api/`](#api)
    - [`config/`](#config)
    - [`hooks/`](#hooks)
    - [`lib/`](#lib)
    - [`stores/`](#stores)
    - [`styles/`](#styles)
    - [`types/`](#types)
    - [`utils/`](#utils)

The following is a brief overview of the project's directory structure under the `src/` directory.

### `app/`

Handles routing, shared layouts, loading, and error displays, using the [Next.js app router](https://nextjs.org/docs/app). Minimal code is written here, focusing on routing and layout management.

### `components/`

Houses all shared components used across different features.

### `components/layouts/`

Combines parts from the 'parts/' directory to create various layouts.

### `components/pages/`

Implements actual pages, which are then imported into 'page.tsx' files in the 'app/' directory.

### `components/parts/`

Components that are larger than basic UI components, such as headers and footers.

### `components/ui/`

Includes shared UI components, such as buttons, cards, text fields. Recommended to use [shadcnUI](https://ui.shadcn.com/docs) components.

### `actions/`

Server-side form action

### `api/`

API related files

### `config/`

Stores all config & constant values utilized in the project.

### `hooks/`

Shared custom hooks utilized across various features.

### `lib/`

Manages files related to third-party libraries, with a separate directory for each library.

### `stores/`

Global state management related files

### `styles/`

Global CSS files for the project.

### `types/`

Shared types used across different features.

### `utils/`

Contains shared utility functions used across different features.
