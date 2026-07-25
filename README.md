# free-google-serp

Query Google Search and parse Search Engine Results Page (SERP) metadata directly into structured JSON arrays without API costs.

## Features

- Queries public search paths.
- Extracts title, destination link, and description snippets.
- Maintains clean request agents automatically.

## Installation

```bash
npm install free-google-serp
```

## Usage

```typescript
import { searchGoogle } from 'free-google-serp';

// Search Google
const results = await searchGoogle('Node.js concurrency');
console.log(results[0]);
/*
Output:
{
  title: 'Node.js Async Execution and Concurrency',
  link: 'https://nodejs.org/...',
  snippet: 'A deep dive into asynchronous tasks...'
}
*/
```

## API Reference

### searchGoogle(query)

Executes Google search and parses the results.

**Parameters:**
- `query`: `string`

**Returns:** `Promise<Array<{ title: string; link: string; snippet: string }>>`

## License

MIT
