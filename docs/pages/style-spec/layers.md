---
title: Layers
id: layers
description: A style's layers property lists all of the layers available in that style.
contentType: specification
order: 8
layout: accordion
products:
- Mapbox Style Specification
prependJs:
    - "import Items from '../../components/style-spec/items';"
    - "import { layerTypes } from '../../data/types';"
    - "import combineItems from '../../util/combine-items';"
    - "import ref from '@mapbox/mapbox-gl-style-spec/reference/latest';"
    - "import AppropriateImage from '../../components/appropriate-image';"

---

A style's `layers` property lists all the layers available in that style. The type of layer is specified by the `"type"` property, and must be one of {{layerTypes.map((t, i) => <var key={i}>{t}</var>).reduce((prev, curr) => [prev, ', ', curr])}}.

Except for layers of the <var>background</var> type, each layer needs to refer to a source. Layers take the data that they get from a source, optionally filter features, and then define how those features are styled.

```json
"layers": {{JSON.stringify(
    ref.$root.layers.example,
    null,
    2
    )}}
```

<!--
START GENERATED CONTENT:
Content in this section is generated directly using the Mapbox Style
Specification. To update any content displayed in this section, make edits to:
https://github.com/mapbox/mapbox-gl-js/blob/main/src/style-spec/reference/v8.json.
-->
{{ <Items entry={ref.layer} />}}
<!-- END GENERATED CONTENT -->

{{<a id="layout-property" className="anchor" />}}
{{<a id="paint-property" className="anchor" />}}

<hr className='my36' />

Layers have two sub-properties that determine how data from that layer is rendered: `layout` and `paint` properties.

_Layout properties_ appear in the layer's `"layout"` object. They are applied early in the rendering process and define how data for that layer is passed to the GPU. Changes to a layout property require an asynchronous "layout" step.

_Paint properties_ are applied later in the rendering process. Paint properties appear in the layer's `"paint"` object. Changes to a paint property are cheap and happen synchronously.

<!--
START GENERATED CONTENT:
Content in this section is generated directly using the Mapbox Style
Specification. To update any content displayed in this section, make edits to:
https://github.com/mapbox/mapbox-gl-js/blob/main/src/style-spec/reference/v8.json.
-->

## background

{{
  <AppropriateImage
    imageId="layer-background"
    className="style-spec-img-sm"
    alt="Antique map style with a brown halftone background pattern."
  />
}}

The background color or pattern of the map.

{{<Items headingLevel="3" entry={combineItems(['layout','paint'], 'background')} /> }}

## fill

{{
  <AppropriateImage
    imageId="layer-fill"
    className="style-spec-img-sm"
    alt="Map with a pink isochrone polygon surrounding the city of Atlanta."
  />
}}

A filled polygon with an optional stroked border.

{{<Items headingLevel="3" entry={combineItems(['layout','paint'], 'fill')} /> }}

## line

{{
  <AppropriateImage
    imageId="layer-line"
    className="style-spec-img-sm"
    alt="Outdoors style map with a dotted red line showing a hiking path."
  />
}}

A stroked line.

{{<Items headingLevel="3" entry={combineItems(['layout','paint'], 'line')} /> }}

## symbol

{{
  <AppropriateImage
    imageId="layer-symbol"
    className="style-spec-img-sm"
    alt="Map with thirty shopping bag icons, color-coded red, orange, and green."
  />
}}

An icon or a text label.

{{<Items headingLevel="3" entry={combineItems(['layout','paint'], 'symbol')} /> }}

## raster

{{
  <AppropriateImage
    imageId="layer-raster"
    className="style-spec-img-sm"
    alt="Map with historical maps overlayed on modern cities."
  />
}}

Raster map textures such as satellite imagery.

{{<Items headingLevel="3" entry={combineItems(['layout','paint'], 'raster')} /> }}

## circle

{{
  <AppropriateImage
    imageId="layer-circles"
    className="style-spec-img-sm"
    alt="Map with circles of different sizes and colors."
  />
}}

A filled circle.

{{<Items headingLevel="3" entry={combineItems(['layout','paint'], 'circle')} /> }}

## fill-extrusion

{{
  <AppropriateImage
    imageId="layer-fill-extrusion"
    className="style-spec-img-sm"
    alt="Dark style map with data-driven extrusions rising up in 3D, in different shades of blue."
  />
}}

An extruded (3D) polygon.

{{<Items headingLevel="3" entry={combineItems(['layout','paint'], 'fill-extrusion')} /> }}

## heatmap

{{
  <AppropriateImage
    imageId="layer-heatmap"
    className="style-spec-img-sm"
    alt="Dark map with a heatmap layer glowing red inside and white outside."
  />
}}

A heatmap.

{{<Items headingLevel="3" entry={combineItems(['layout','paint'], 'heatmap')} /> }}

## hillshade

{{
  <AppropriateImage
    imageId="layer-hillshade"
    className="style-spec-img-sm"
    alt="Map of Mount Fuji rising up with striking texture and shading."
  />
}}

Client-side hillshading visualization based on DEM data. The implementation now only supports Mapbox Terrain RGB and Mapzen Terrarium tiles.

{{<Items headingLevel="3" entry={combineItems(['layout','paint'], 'hillshade')} /> }}

<!-- END GENERATED CONTENT -->
