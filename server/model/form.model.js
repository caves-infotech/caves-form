const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
    },
    location: {
        village: {
            type: String,
        },
        taluka: {
            type: String,
        },
        district: {
            type: String,
        },
        ulb: {
            type: String,
        },
        zone: {
            type: String,
        },
    },
    plot: {
        sizex: {
            type: Number,
        },
        sizey: {
            type: Number,
        },
        area: {
            type: Number,
        },
        roadWidth: {
            type: Number,
        },
    },
    fsi: {
        area: {
            type: Number
        },
        deductions: {
            proposedDp: {
                type: Number
            },
            anyDp: {
                type: Number
            },
            total: {
                type: Number
            },
        },
        balanceArea: {
            type: Number
        },
        aminitySpace: {
            required: {
                type: Number
            },
            adj2b: {
                type: Number
            },
            balanceProposed: {
                type: Number
            },
        },
        netPlotArea: {
            type: Number
        },
        recreationOpenSpace: {
            required: {
                type: Number
            },
            proposed: {
                type: Number
            },
        },
        internalRoadArea: {
            type: Number
        },
        plotableArea: {
            type: Number
        },
        builtUpArea: {
            type: Number
        },
        paymentOfPremium: {
            maxPremium: {
                type: Number
            },
            proposedPremium: {
                type: Number
            },
        },
        inSituLoading: {
            areaAgainstDpRoad: {
                type: Number
            },
            areaAgainstAminitySpace: {
                type: Number
            },
            tdrArea: {
                type: Number
            },
            toatlInSitu: {
                type: Number
            },
        },
        additinalFsi: {
            type: Number
        },
        totalEntitlementProposed: {
            whicheverApplicable: {
                type: Number
            },
            ancillaryArea: {
                type: Number
            },
            totalEntitlement: {
                type: Number
            },
        },
        maxUtilizationLimit: {
            type: Number
        },
        totalBuiltUpAreaProposal: {
            existingBuiltUpArea: {
                type: Number
            },
            proposedBuiltUpArea: {
                type: Number
            },
            totalBuiltUp: {
                type: Number
            },
        },
        FSIConsumed: {
            type: Number
        },
        areOfInclusiveHousing: {
            required: {
                type: Number
            },
            proposed: {
                type: Number
            },
        }
    },
},
    { timestamps: true }
);

const formModel = mongoose.model("Form", formSchema);

module.exports = formModel;