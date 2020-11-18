# USA headlines

Sorry for this horrid application, the only thing worse than its design is its content. I have had very limited time this module so this is just a proof of concept return. I have other cooler react apps but they're not completely working and I won't finish them in time so I chose to return this instead.

This react app fetches data in a useEffect hook and passes the data down to the components as props. 'articles' state is the original data and it stays unaltered. 'filteredArticles' is the state being displayed and will either show articles state (the original one, with all of them) or a filtered version showing only ones from The Washington Post.

Built with webpack on Netlify.

### Small problem. The API used is only available on localhost for development purposes, so the build won't show any data once it's uploaded to another server (like Netlify for example. You can just clone this repo and run it locally to see it's functionality in :axe:ion
