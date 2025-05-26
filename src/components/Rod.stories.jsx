import Rod from "@components/Rod.jsx";
import BeadLine from "@components/BeadLine.jsx";

export default {
    component: Rod,
};

const allInactiveBeads = [
    { id: 1, isActive: false },
    { id: 2, isActive: false },
    { id: 3, isActive: false },
    { id: 4, isActive: false },
    { id: 5, isActive: false },
    { id: 6, isActive: false },
    { id: 7, isActive: false },
];

export const AllInactive = {
    args: {
        beads: allInactiveBeads,
    },
};

const withDividerBeads = [
    { id: 1, isActive: false },
    { id: 2, isActive: false },
    { id: 3, isActive: false },
    { id: 4, isActive: false },
    { id: 5, isActive: false },
    { id: 6, isActive: true },
    { id: 7, isActive: true },
];

export const WithDivider = {
    args: {
        beads: withDividerBeads,
    },
};

const allActiveBeads = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: true },
    { id: 4, isActive: true },
    { id: 5, isActive: true },
    { id: 6, isActive: true },
    { id: 7, isActive: true },
];

export const AllActive = {
    args: {
        beads: allActiveBeads,
    },
};
