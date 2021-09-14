# Workhays

> Workhays using sveltekit

## Developing

1. Clone this repo
2. Install packages `npm install`
3. Install Netlify CLI to run serverless functions `npm install netlify-cli -g`
4. Spin up development server `netlify dev`

### Using Components

A component alias is being used. Currently you can import components
from within `.svelte` components like so

```javascript
import Navbar from '$components/Navbar.svelte'
```

### API Endpoints

Netlify serverless functions are used for the API endpoints. The endpoints are located in `src/api`. There is an empty `package.json` so the `'type': 'module'` from the base `package.json` doesn't interfere with the Netlify build process. (If removed everything starts yelling about ES Modules)
