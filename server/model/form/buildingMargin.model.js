const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    user: {
      type: String,
    },
    projectName: {
      type: String,
    },
    buildingType: {
      input: {
        type: String,
      },
      commercial: {
        input: {
          type: String,
        },
        subInput: {
          type: String,
        },
      },
    },
    areaType: {
      type: String,
    },
    ulb: {
      type: String,
    },
    zone: {
      type: String,
    },
    moreThan500: {
      type: String,
    },
    buildingHeight: {
      type: Number,
    },
    plotWidth: {
      type: Number,
    },
    plotArea: {
      type: Number,
    },
    plotType: {
      type: String,
    },
    roadDirection: {
      front: {
        input: {
          type: String,
        },
        margin: {
          type: String,
        },
      },
      back: {
        input: {
          type: String,
        },
        radioInput: {
          type: String,
        },
        margin: {
          type: String,
        },
      },
      left: {
        input: {
          type: String,
        },
        radioInput: {
          type: String,
        },
        margin: {
          type: String,
        },
      },
      right: {
        input: {
          type: String,
        },
        radioInput: {
          type: String,
        },
        margin: {
          type: String,
        },
      },
    },
  },
  { timestamps: true }
);

const buildingMarginFormModel = mongoose.model(
  "buildingMarginForm",
  formSchema
);

module.exports = buildingMarginFormModel;
