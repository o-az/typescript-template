_NOTE: You are welcome to ask any questions if anything is unclear. Also feel free to post a discussion_

# TypeScript / Node.js Template

_Requires __[Node.js LTS (v20 or later)](https://nodejs.org/en/blog/release/v20.8.1)__ and
**[pnpm __v8__ or higher](https://pnpm.io/installation)**_

---

## **Stack**

- `TypeScript`
- `pnpm` package manager
- `vitest` test runner
- `CommonJS` and `ESM` support
- `Biome` for linting and formatting
- CI with GitHub Actions
- Publish to `npm` registry, GitHub Packages, Docker Hub and GitHub Container Registry with `pnpm` (see `publish.yml`)

### - VSCode ready (see `.vscode`)

---

## Getting started

### Clone repository

```sh
git clone https://github.com/o-az/typescript-template.git && cd typescript-template
```

### Install dependencies

```sh
pnpm install
```

### Copy `.env.example` to `.env` and modify as needed

```sh
cp .env.example .env
```

### Run development server

```sh
pnpm dev
```

### run tests

```sh
pnpm test
```

### run build and start production server

```sh
pnpm build && pnpm start
```

### to run a one-off TypeScript file

```sh
node --import=tsx path/to/file.ts
```

### Publish Package

_This will trigger publish workflow in GitHub Actions_

```sh
pnpm release
```

#### select version, it will create git tags and push to remote

### Lastly, you should modify the workflows in .github/workflows to suit your needs
