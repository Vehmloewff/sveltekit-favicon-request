# SvelteKit favicon request bug

A minimal bug reproduction

```sh
git clone https://github.com/Vehmloewff/sveltekit-favicon-request
cd sveltekit-favicon-request
npm i
npm run dev
```

Open http://localhost:3000 and then hit the "Go to post" link.  Then look back in the console.

# Expected

The console to print...

```
> get a post with id "7891879387591" from database
```

# Actual

...but the console actually prints:

```
> get a post with id "7891879387591" from database
> get a post with id "favicon.png" from database
```

Firstly, you can verify in the browser that the client uses the right id.  It is the SSR that gets it wrong.  And why is there an SSR request anyway?  If we are going to ssr the page, should it not be done before the page is hydrated ;D?

# Something else

If you start your browser directly at http://localhost:3000/blog/7891879387591 everything works correctly.

```
> get a post with id "7891879387591" from database
> get a post with id "7891879387591" from database
```

One request to our `/blog/[post].json` endpoint for the ssr, and one for the client hydration.

Thus, it appears that this issue just presents itself on SPA navigations.
