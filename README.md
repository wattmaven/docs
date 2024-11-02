# `@wattmaven/docs`

## Deployment

```shell
# Install the Vercel CLI.
pnpm i -g vercel

# Pull the environment information.
VERCEL_PROJECT_ID=$VERCEL_DOCS_PROJECT_ID vercel pull --yes --environment=production --scope=wattmaven --token=$VERCEL_TOKEN

# Copy the Vercel environment variables.
cp .vercel/.env.production.local .env.production.local

# Build the project artifacts.
vercel build --prod

# Deploy the project artifacts to Vercel.
VERCEL_PROJECT_ID=$VERCEL_DOCS_PROJECT_ID vercel deploy --prebuilt --prod --token=$VERCEL_TOKEN
```
