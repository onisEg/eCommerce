# eCommerce · Product Catalogue

A vanilla JavaScript storefront exercise that builds product cards from Fake Store API responses. Category selection and sort controls both trigger a fresh request.

[Open the live demo](https://oniseg.github.io/eCommerce/) · [View screenshot](https://raw.githubusercontent.com/onisEg/resume/23df91e50f87b60e1360d79edcc24cf77eb09b07/public/projects/ecommerce.webp)

## From category click to product card

1. The page starts with the API category `jewelery` and ascending order. Clicking a category marks it active and passes its label to the request function.
2. The two sort controls update `currentSort` and fetch the current category again. Each returned item contributes its image, title, price, rating and review count to a Bootstrap grid.
3. The crossed-out price is calculated in the browser as the floor of 110% of the returned price. Heart clicks change the icon on the current card. Rebuilding the grid recreates those icons.

## Run locally

From the repository root, serve the checked-in files with Python 3:

```sh
python -m http.server 8000
```

Open [localhost:8000](http://localhost:8000/) to load `index.html`. The browser reads the HTML, styles and assets directly. On Windows, `py -m http.server 8000` starts the same server.

## Source guide

| File or directory | What to look for |
| --- | --- |
| [index.html](index.html) | Category controls, sort controls and the product grid container. |
| [js/main.js](js/main.js) | Category and sort state, fetch call, card rendering and heart handlers. |
| [css/style.css](css/style.css) | Storefront styling layered over Bootstrap. |

## Manual walkthrough

Pick a category, toggle sort and inspect the request query. Click a heart, then reload the category. The icon state belongs to the rendered card. If the grid stays empty, check the response from Fake Store API before investigating the card markup.
