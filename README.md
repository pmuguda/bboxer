# BBoxer

**Draw, snap & instantly copy AOI / bounding-box coordinates — in any EPSG.**

A zero-build, single-page web tool for the recurring pain point of grabbing the
coordinates of a bounding box or area of interest. Live on GitHub Pages.

👉 **[Open BBoxer](https://pmuguda.github.io/bboxer/)**

![BBoxer](https://img.shields.io/badge/map-MapLibre%20GL-3fb950) ![EPSG](https://img.shields.io/badge/CRS-EPSG%3A4326%20%2B%20any-d29922)

## Features

- 🗺️ **Dark CARTO basemap** (same clean 2D style as the Equi7Grid Explorer)
- ✏️ **Draw a BBox** — click & drag a rectangle
- ⬡ **Draw a Polygon** — click vertices, double-click to close (bbox derived)
- 📤 **Upload GeoJSON** — renders the geometry and computes its bbox
- 🌍 **Country picker** — toggle on, hover to highlight, click to snap a bbox around any country
- 🧭 **EPSG transform** — defaults to **EPSG:4326**; type any EPSG code (e.g. `32633`, `3857`) for an on-the-fly reprojection of the bbox corners
- 📋 **One-click copy** in multiple formats: array `[W,S,E,N]`, CSV, Python list, GDAL `-te`, and WKT polygon
- 🎚️ **Precision slider** — 0–8 decimal places
- ⌨️ **Esc** cancels any active draw / picker mode

## Coordinate formats

| Format | Example |
|--------|---------|
| Array | `[5.9, 47.2, 10.5, 55.1]` |
| CSV | `5.9,47.2,10.5,55.1` |
| GDAL `-te` | `-te 5.9 47.2 10.5 55.1` |
| WKT | `POLYGON((5.9 47.2, 10.5 47.2, ...))` |

## How it works

- [MapLibre GL JS](https://maplibre.org/) for the map
- [proj4js](http://proj4js.org/) for CRS transforms (definitions fetched on demand from [epsg.io](https://epsg.io))
- [world-atlas](https://github.com/topojson/world-atlas) (110m) + [topojson-client](https://github.com/topojson/topojson-client) for the country picker
- All client-side — no backend, no build step

## Run locally

Just open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## License

MIT — made by [Pavan Muguda](https://pmuguda.github.io)
