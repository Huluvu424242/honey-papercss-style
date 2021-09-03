# honey-papercss-style

<!-- Auto Generated Below -->


## Properties

| Property             | Attribute        | Description                     | Type                        | Default     |
| -------------------- | ---------------- | ------------------------------- | --------------------------- | ----------- |
| `feedAdministration` | --               | Feeds Administration Komponente | `HTMLHoneyNewsFeedsElement` | `undefined` |
| `localBasePath`      | `local-basepath` | base of local site              | `any`                       | `undefined` |
| `newsFeed`           | --               | News reader Komponente          | `HTMLHoneyNewsFeedElement`  | `undefined` |
| `siteBasePath`       | `site-basepath`  | base of remote site             | `any`                       | `undefined` |
| `verbose`            | `verbose`        | enable console logging          | `boolean`                   | `false`     |


## Dependencies

### Depends on

- [honey-papercss-style-header](header)
- [honey-papercss-style-feed](news)
- [honey-papercss-style-feeds](feeds)
- [honey-papercss-style-statistic](statistic)

### Graph
```mermaid
graph TD;
  honey-papercss-style --> honey-papercss-style-header
  honey-papercss-style --> honey-papercss-style-feed
  honey-papercss-style --> honey-papercss-style-feeds
  honey-papercss-style --> honey-papercss-style-statistic
  style honey-papercss-style fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)* by Huluvu424242
