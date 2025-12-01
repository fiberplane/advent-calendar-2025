# Fiberplane's Advent Calendar 2025

**Part 1: The Blueprint** - A starter template for building your own interactive Advent Calendar using [Cloudflare Workers](https://developers.cloudflare.com/workers/) and the [Static Assets](https://developers.cloudflare.com/workers/static-assets/binding/) Binding.

This is the first part of a series where we'll build a complete Advent Calendar application. In this initial version, we focus on:

- Setting up **Cloudflare Workers** with **Static Asset binding**
- Creating a beautiful, responsive layout (designed with [v0](https://v0.dev))
- Deploying your first static site on Cloudflare's global network

> 💡 **Note**: The interactive JavaScript functionality will be added in future parts of this series. This version provides the foundation and visual design to get you started!

## Tutorial Series Navigation

Follow along with each part of the series by checking out the corresponding branch or tag:

| Part       | Description             | Branch                                                                     | Tag                                                                                          | Video       |
| ---------- | ----------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ----------- |
| **Part 1** | Static Assets Blueprint | [`part-1`](https://github.com/fiberplane/advent-calendar-2025/tree/part-1) | [`v1.0-part-1`](https://github.com/fiberplane/advent-calendar-2025/releases/tag/v1.0-part-1) | Coming soon |
| **Part 2** | DOM Manipulation        | `part-2`                                                                   | `v1.                                                                                         | Coming soon |

### How to Use Different Parts

**To start from a specific part:**

```bash
# Clone the repository
git clone https://github.com/fiberplane/advent-calendar-2025.git
cd advent-calendar-2025

# Checkout the part you want to follow
git checkout part-1  # or part-2, part-3, etc.

# Install and run
npm install
npm run dev
```

**To see the latest complete version:**

```bash
git checkout main
```

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository or download the project files
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

This will start a local Wrangler development server. Open your browser to the URL shown in the terminal (typically `http://localhost:8787`).

You'll see the calendar layout with all 24 boxes. The visual design is complete, but the boxes don't do anything yet—that's coming in the next parts!

### Deployment

Deploy to Cloudflare Workers:

```bash
npm run deploy
```

Your Advent Calendar will be live on Cloudflare's global network!

## 📁 Project Structure

```
advent-project/
├── public/                     # Static assets directory (served by Cloudflare Workers)
│   ├── index.html              # Main HTML structure with 24-day calendar grid
│   ├── styles.css              # Complete styling with sketch aesthetic
│   ├── script.js               # Entry point (ready for your logic!)
│   └── generateAdventBoxes.js  # Calendar box generation (ready for your logic!)
├── wrangler.jsonc              # Cloudflare Workers configuration (Static Assets setup)
├── package.json                # Project dependencies and scripts
└── README.md                   # This file
```

## Understanding Static Assets on Cloudflare Workers

This project demonstrates the **Static Assets** feature in Cloudflare Workers. Here's what makes it special:

### Configuration in `wrangler.jsonc`

```jsonc
"assets": {
  "directory": "./public"
}
```

This simple configuration tells Cloudflare Workers to:

- Serve all files from the `public/` directory
- Automatically handle routing for static files
- Deliver content from Cloudflare's global edge network
- Provide lightning-fast load times worldwide

## Get Started Now

This blueprint is ready for you to:

1. **Deploy as-is**: Get a beautiful static Advent calendar live in minutes
2. **Follow the series**: Watch for upcoming parts where we add interactivity
3. **Build your own**: Use this foundation to create your custom calendar with your own features

## Educational and Fun Content

This project is part of Fiberplane's educational series on building with Cloudflare Workers. It's designed to be:

- **Beginner-friendly**: Start with static assets, build up to complex features
- **Production-ready**: Real code you can actually deploy and use
- **Open source**: Feel free to learn, modify, and share

---

Made with ❤️🪿 for the holiday season by Fiberplane
