# pcsitspl.com → perfect108.com redirect

This folder is a **standalone Firebase Hosting deploy config**. It is not part of the
`pcs-site-v1` React app and is not built or bundled with it.

## What it does
Serves a 301 redirect from every path on `pcsitspl.com` to `https://perfect108.com`.
`pcsitspl.com` previously served Anava Platform / neuromodulation content; that product
now lives entirely on `anavaclinics.com`, and `pcsitspl.com` is being consolidated into
`perfect108.com` as the PCS services-company domain.

## Where it deploys
- Firebase project: `pcs-website-201f9` (same project as `perfect108.com`/`pcsdatai.com`)
- Firebase Hosting site/target: `pcsitspl-cde9d` (a secondary site within that project,
  which `pcsitspl.com` is connected to as a custom domain)
- The hosting `target` name used locally is `pcsitspl-redirect` (see `.firebaserc`),
  mapped to the `pcsitspl-cde9d` site via `firebase target:apply`.

## Deploying a change
```bash
cd pcsitspl-redirect
firebase target:apply hosting pcsitspl-redirect pcsitspl-cde9d --project pcs-website-201f9   # one-time per machine
firebase deploy --only hosting:pcsitspl-redirect
```

Scoping the deploy to `hosting:pcsitspl-redirect` ensures this never touches the main
`pcs-website-201f9` default site that serves `perfect108.com`/`pcsdatai.com`.

## Verifying
```bash
curl -I https://pcsitspl.com
curl -I https://pcsitspl-cde9d.web.app
```
Both should return `HTTP/2 301` with `location: https://perfect108.com`.
