const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    user: {
        type: String,
    },
    name: {
        type: String,
    },
    ulb: {
        type: Number,
    },
    areaType: {
        type: String,
    },
    zone: {
        type: String,
    },
    buildingType: {
        type: String,
    },
    residential: {
        input: {
            type: String,
        },
        multi: {
            area150above: {
                type: Number,
            },
            area80To150: {
                type: Number,
            },
            area40To80: {
                type: Number,
            },
            area30To40: {
                type: Number,
            },
            areaLess30: {
                type: Number,
            },
            above5PercentCar: {
                type: Number,
            },
            ulbForAboveCar: {
                type: Number,
            },
            above5PercentScooter: {
                type: Number,
            },
            ulbForAboveScooter: {
                type: Number,
            },

        },
        lodge: {
            type: Number,
        },
        restaurants: {
            type: Number,
        }
    },
    institutional: {
        type: Number,
    },
    publicGathering: {
        input: {
            type: String,
        },
        assembly: {
            type: Number,
        },
        multiplex: {
            forEvery40Seats: {
                type: Number,
            }
        },
        mangalKaryalaya: {
            forEvery100sqm: {
                type: Number,
            }
        },
        communityHall: {
            forEvery200sqm: {
                type: Number,
            }
        }
    },
    educational: {
        input: {
            type: String,
        },
        schools: {
            forEvery100sqm: {
                type: Number,
            },
            forEvery3Classroom: {
                type: Number,
            }
        },
        college: {
            forEvery100sqm: {
                type: Number,
            },
            forEvery3Classroom: {
                type: Number,
            },
        },
        coaching: {
            type: Number,
        },
    },
    govOrPublicOrPrivate: {
        input: {
            type: Number,
        },
        visitor: {
            type: Number,
        },
    },
    mercantile: {
        input: {
            type: String,
        },
        marketStoresShops: {
            type: Number,
        },
        wholeSale: {
            type: Number,
        },
        hazardousBuilding: {
            type: Number,
        },
        officeItBuilding: {
            type: Number,
        },
    },
    industrial: {
        type: Number,
    },
    storage: {
        type: Number,
    },
    dataCentre: {
        type: Number,
    },
},
    { timestamps: true }
);

const parkingFormModel = mongoose.model("parkingForm", formSchema);

module.exports = parkingFormModel;