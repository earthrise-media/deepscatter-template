export let tileConfig = {
    colors: {
      natural: {
        title: "Natural",
        encoding: {
          field: "color",
          range: [ "#807371", "#37565e", "#083545", "#526d6d", "#1b5355", "#a38b83", "#254b53", "#2f5b67", "#0d3768", "#666668", "#fad2ae", "#49535a", "#8a8d8a", "#465f67", "#3d6b6c", "#6c7a7a", "#16474f", "#cbb6a8", "#1c4579", "#2e5b5b", "#384c55", "#25525a", "#586467", "#a09f98", "#002235", "#18394b", "#4e656c", "#707170", "#346062", "#04305e", "#7c7d7a", "#43656c", "#486f73", "#406160", "#2d545f", "#0e3e4e", "#8d817c", "#617679", "#3f5359", "#275884", "#3b6068", "#5f5c61", "#5b6b6d", "#435860", "#748586", "#4a5d60", "#786266", "#2e4852", "#245b5f", "#22424f", "#153d71", "#bf9a8e", "#2d4e59", "#63706f", "#1c4859", "#516164", "#335358", "#9a706f", "#557476", "#496866", "#326966", "#3c5a61", "#53575e", "#022c3e", ],
          domain: [0, 63],
        },
      },
      landcover: {
        title: "Landcover",
        encoding: {
          field: "color",
          range: ["#419BDF", "#B39FE1", "#A59B8F", "#C4281B", "#DFC35A", "#E49635", "#7A87C6", "#88B053", "#397D49"],
          domain: [0, 8],
        },
      },
      pca: {
        title: "PCA",
        encoding: {
          field: "pca",
          range: "cividis",
          domain: [0, 1],
        },
      },
      ndvi: {
        title: "NDVI",
        encoding: {
          field: "ndvi",
          range: "cividis",
          domain: [0, 1],
        },
      },
    },
    positions: {
      geographic: {
        title: "Geographic",
        encoding: {
          x: {
            field: "x0",
            transform: "literal",
          },
          y: {
            field: "y0",
            transform: "literal",
          },
        },
      },
      tsne: {
        title: "TSNE",
        encoding: {
          x: {
            field: "x",
            transform: "literal",
          },
          y: {
            field: "y",
            transform: "literal",
          },
        },
      },
    },
  };