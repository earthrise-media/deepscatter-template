export let tileConfig = {
    geographic: false,
    colors: {
      quantity: {
        title: "Quantity",
        encoding: {
          field: "quantity",
          range: ["inferno"],
          domain: [0, 1],
        },
      },
      random: {
        title: "Random",
        encoding: {
          field: "random",
          range: ["viridis"],
          domain: [0, 1],
        },
      },
      class: {
        title: "Class",
        encoding: {
          field: "class",
          range: ["plasma"],
          domain: [0, 3],
        },
      },
    },
    positions: {
      random1: {
        title: "Random 1",
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
      random2: {
        title: "Random 2",
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
      random3: {
        title: "Random 3",
        encoding: {
          x: {
            field: "x1",
            transform: "literal",
          },
          y: {
            field: "y1",
            transform: "literal",
          },
        },
      },
    },
  };