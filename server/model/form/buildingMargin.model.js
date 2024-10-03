const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  user: {
    type: String,
  },
  projectName: {
    type: String,
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
  plotType: {
    type: String,
  },
  buildingType: {
    type: String,
  },
  moreThan500: {
    type: String,
  },
  roadWidth: {
    type: Number,
  },
  roadDirection: {
    front: {
      input: {
        type: String,
      },
      roadWidth: {
        type: String,
      },
    },
    back: {
      input: {
        type: String,
      },
      roadWidth: {
        type: String,
      },
    },
    left: {
      input: {
        type: String,
      },
      roadWidth: {
        type: String,
      },
    },
    right: {
      input: {
        type: String,
      },
      roadWidth: {
        type: String,
      },
    },
  }
},
  { timestamps: true }
);

const buildingMarginFormModel = mongoose.model("buildingMarginForm", formSchema);

module.exports = buildingMarginFormModel;