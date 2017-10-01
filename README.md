# Svelte app for a portfolio

This is a first draft portfolio app using [magical disappearing UI framework, Svelte](https://svelte.technology/). View example: 

The idea is to have a simple, clean solution to display projects/portfolio

You click a thumbnail and view a larger image(s) and some descriptive text. And that's it. It's all data driven from the `/src/data.js` file, so no need for lots of flat files etc. It's an array of objects, one for each item:

```js
    [
        {
          thumbnail: '/assets/img/...png',
          thumbCaption: 'Ref for thumb',
          title: 'Title of item',
          subtitle: 'a subtitle',
          images: [ // array of images
            {
              img: '/assets/img/ch-01.jpg',
              caption: 'image caption'
            }
          ],
          copy: 'Any description text'
        },
        ...
    ]
```

It only has a CSS dependency of [Basscss](http://basscss.com/)

**TODO**:
- Add a footer
- Create a data file for settings (email, twitter etc)
- Create a [Basscss Theme](http://basscss.com/themes/) for it
- Be able to highlight (fade out?) the active thumbnail
- Add some logic to not show feature item on initial load (including containing `div`)

---------------------

The below is from the original Svelte template readme:

# svelte app

This is a project template for [Svelte](https://svelte.technology) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npm install -g degit # you only need to do this once

degit sveltejs/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.


## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public
```
