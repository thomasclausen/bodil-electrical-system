import { Nodes, Edges, Layouts, defineConfigs } from "v-network-graph";

const nodes: Nodes = {
  node01: { name: "Engine", shape: "rect", size: 36, color: "#000000" },
  node02: { name: "Switch", shape: "circle", size: 12, color: "#000080" },
  node03: { name: "Land power", shape: "rect", size: 24, color: "#000000" },
  node04: { name: "Battery charger", shape: "circle", size: 12, color: "#000080" },
  node05: { name: "Solar panel", shape: "rect", size: 48, color: "#000000" },

  node06: { name: "Battery\n(start)", shape: "rect", size: 24, color: "#000080" },
  node07: { name: "Battery\n(leisure)", shape: "rect", size: 24, color: "#000080" },

  node08: { name: "Fuse block", shape: "rect", size: 18, color: "#000080" },
  node09: { name: "Main switch", shape: "circle", size: 9, color: "#000080" },
  node10: { name: "Negative bus", shape: "rect", size: 18, color: "#000080" },

  node11: { name: "VHF", shape: "rect", size: 24, color: "#000080" },

  node12: { name: "Radio", shape: "rect", size: 18, color: "#000080" },
  node13: { name: "Lanterns", shape: "circle", size: 18, color: "yellow" },
  node14: { name: "Lights", shape: "circle", size: 18, color: "yellow" },
  node15: { name: "USB", shape: "circle", size: 18, color: "green" },
  node16: { name: "Instruments", shape: "rect", size: 18, color: "#000080" },

  node17: { name: "Bow", shape: "circle", size: 6, color: "yellow" },
  node18: { name: "Mast", shape: "circle", size: 6, color: "yellow" },
  node19: { name: "Stern", shape: "circle", size: 6, color: "yellow" },

  node20: { name: "Cabin, starboard", shape: "circle", size: 6, color: "yellow" },
  node21: { name: "Cabin, port", shape: "circle", size: 6, color: "yellow" },
  node22: { name: "Toilet", shape: "circle", size: 6, color: "yellow" },
  node23: { name: "Salon, starboard", shape: "circle", size: 6, color: "yellow" },
  node24: { name: "Salon, port", shape: "circle", size: 6, color: "yellow" },
  node25: { name: "Salon, ceiling", shape: "circle", size: 6, color: "yellow" },
  node26: { name: "Bunk, starboard", shape: "circle", size: 6, color: "yellow" },
  node27: { name: "Bunk, port", shape: "circle", size: 6, color: "yellow" },
  node28: { name: "Kitchen", shape: "circle", size: 6, color: "yellow" },
  node29: { name: "Navigation", shape: "circle", size: 6, color: "yellow" },

  node30: { name: "Toilet", shape: "circle", size: 6, color: "green" },
  node31: { name: "Bunk, starboard", shape: "circle", size: 6, color: "green" },
  node32: { name: "Bunk, port", shape: "circle", size: 6, color: "green" },

  node33: { name: "Compass", shape: "circle", size: 6, color: "#000080" },
  node34: { name: "Depth", shape: "rect", size: 12, color: "#000080" },
  node35: { name: "GPS #1", shape: "rect", size: 12, color: "#000080" },
  node36: { name: "GPS #2", shape: "rect", size: 12, color: "#000080" },
};

const edges: Edges = {
  edge01: { source: "node01", target: "node02", color: "black", length: 10, size: 25 },
  edge02: { source: "node01", target: "node02", color: "red", length: 10, size: 25 },

  edge03: { source: "node02", target: "node06", color: "black", length: 10, size: 25 },
  edge04: { source: "node02", target: "node06", color: "red", length: 10, size: 25 },
  edge05: { source: "node02", target: "node07", color: "black", length: 10, size: 25 },
  edge06: { source: "node02", target: "node07", color: "red", length: 10, size: 25 },

  edge07: { source: "node03", target: "node04", color: "brown", length: 10, size: 25 },

  edge08: { source: "node04", target: "node06", color: "black", length: 10, size: 25 },
  edge09: { source: "node04", target: "node06", color: "red", length: 10, size: 25 },
  edge10: { source: "node04", target: "node07", color: "black", length: 10, size: 25 },
  edge11: { source: "node04", target: "node07", color: "red", length: 10, size: 25 },

  edge14: { source: "node05", target: "node07", color: "black", length: 10, size: 25 },
  edge15: { source: "node05", target: "node07", color: "red", length: 10, size: 25 },

  edge16: { source: "node06", target: "node01", color: "black", length: 10, size: 25 },
  edge17: { source: "node06", target: "node01", color: "red", length: 10, size: 25 },

  edge18: { source: "node07", target: "node08", color: "black", length: 10, size: 25 },
  edge19: { source: "node07", target: "node10", color: "red", length: 10, size: 25 },

  edge20: { source: "node08", target: "node09", color: "black", length: 10, size: 25 },
  
  edge21: { source: "node08", target: "node11", color: "black", length: 10, size: 25 },
  edge22: { source: "node10", target: "node11", color: "red", length: 10, size: 25 },

  edge23: { source: "node09", target: "node12", color: "black", length: 10, size: 25 },
  edge24: { source: "node10", target: "node12", color: "red", length: 10, size: 25 },

  edge25: { source: "node09", target: "node13", color: "black", length: 10, size: 25 },
  edge26: { source: "node10", target: "node13", color: "red", length: 10, size: 25 },

  edge27: { source: "node09", target: "node14", color: "black", length: 10, size: 25 },
  edge28: { source: "node10", target: "node14", color: "red", length: 10, size: 25 },

  edge29: { source: "node09", target: "node15", color: "black", length: 10, size: 25 },
  edge30: { source: "node10", target: "node15", color: "red", length: 10, size: 25 },

  edge31: { source: "node09", target: "node16", color: "black", length: 10, size: 25 },
  edge32: { source: "node10", target: "node16", color: "red", length: 10, size: 25 },

  edge33: { source: "node13", target: "node17", color: "brown", length: 10, size: 25 },
  edge34: { source: "node13", target: "node18", color: "brown", length: 10, size: 25 },
  edge35: { source: "node13", target: "node19", color: "brown", length: 10, size: 25 },

  edge36: { source: "node14", target: "node20", color: "brown", length: 10, size: 25 },
  edge37: { source: "node14", target: "node21", color: "brown", length: 10, size: 25 },
  edge38: { source: "node14", target: "node22", color: "brown", length: 10, size: 25 },
  edge39: { source: "node14", target: "node23", color: "brown", length: 10, size: 25 },
  edge40: { source: "node14", target: "node24", color: "brown", length: 10, size: 25 },
  edge41: { source: "node14", target: "node25", color: "brown", length: 10, size: 25 },
  edge42: { source: "node14", target: "node26", color: "brown", length: 10, size: 25 },
  edge43: { source: "node14", target: "node27", color: "brown", length: 10, size: 25 },
  edge44: { source: "node14", target: "node28", color: "brown", length: 10, size: 25 },
  edge45: { source: "node14", target: "node29", color: "brown", length: 10, size: 25 },

  edge46: { source: "node15", target: "node30", color: "brown", length: 10, size: 25 },
  edge47: { source: "node15", target: "node31", color: "brown", length: 10, size: 25 },
  edge48: { source: "node15", target: "node32", color: "brown", length: 10, size: 25 },

  edge49: { source: "node16", target: "node33", color: "brown", length: 10, size: 25 },
  edge50: { source: "node16", target: "node34", color: "brown", length: 10, size: 25 },
  edge51: { source: "node16", target: "node35", color: "brown", length: 10, size: 25 },
  edge52: { source: "node16", target: "node36", color: "brown", length: 10, size: 25 },
};

const layouts: Layouts = {
  nodes: {
    node01: { x: 200, y: 0 }, // Engine
    node02: { x: 200, y: 200 }, // Switch
    node03: { x: 800, y: 0 }, // Land power
    node04: { x: 600, y: 0 }, // Battery charger
    node05: { x: 600, y: 200 }, // Solar cell

    node06: { x: 400, y: 0 }, // Battery (start)
    node07: { x: 400, y: 200 }, // Battery (leisure)

    node08: { x: 300, y: 300 }, // Fuse block
    node09: { x: 300, y: 400 }, // Main switch
    node10: { x: 500, y: 400 }, // Negative bus

    node11: { x: 600, y: 300 }, // VHF

    node12: { x: 200, y: 600 }, // Radio
    node13: { x: 300, y: 600 }, // Lanterns
    node14: { x: 400, y: 600 }, // Light
    node15: { x: 500, y: 600 }, // USB
    node16: { x: 600, y: 600 }, // Instruments

    node17: { x: 300, y: 650 }, // Lantern, bow
    node18: { x: 300, y: 700 }, // Lantern, mast
    node19: { x: 300, y: 750 }, // Lantern, stern

    node20: { x: 400, y: 650 }, // Light, cabin, starboard
    node21: { x: 400, y: 700 }, // Light, cabin, port
    node22: { x: 400, y: 750 }, // Light, toilet
    node23: { x: 400, y: 800 }, // Light, salon, starboard
    node24: { x: 400, y: 850 }, // Light, salon, port
    node25: { x: 400, y: 900 }, // Light, salon, ceiling
    node26: { x: 400, y: 950 }, // Light, bunk, starboard
    node27: { x: 400, y: 1000 }, // Light, bunk, port
    node28: { x: 400, y: 1050 }, // Light, kitchen
    node29: { x: 400, y: 1100 }, // Light, navigation

    node30: { x: 500, y: 650 }, // USB, toilet
    node31: { x: 500, y: 700 }, // USB, bunk, starboard
    node32: { x: 500, y: 750 }, // USB, bunk, port

    node33: { x: 600, y: 650 }, // Compass
    node34: { x: 600, y: 700 }, // Depth
    node35: { x: 600, y: 750 }, // GPS #1
    node36: { x: 600, y: 800 }, // GPS #2
  },
};

const configs = defineConfigs({
  view: {
    zoomEnabled: false,
  },
  node: {
    draggable: false,
    selectable: false,
    normal: {
      borderRadius: 3,
      color: node => node.color,
      height: node => node.size,
      radius: node => node.size,
      type: node => node.shape,
      width: node => node.size,
    },
    hover: {
      color: node => node.color,
      height: node => node.size,
      radius: node => node.size,
      width: node => node.size,
    },
    label: {
      margin: 6,
    },
  },
  edge: {
    selectable: false,
    normal: {
      animate: true,
      animationSpeed: 10,
      color: edge => edge.color,
      dasharray: "12 6",
      linecap: "round",
      width: 3,
    },
    hover: {
      animate: true,
      animationSpeed: 10,
      color: edge => edge.color,
      width: 3,
    },
    label: {
      margin: 10,
    },
  },
})

export default {
  nodes,
  edges,
  layouts,
  configs,
};