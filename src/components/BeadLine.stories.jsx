import BeadLine from '@components/BeadLine.jsx'

export default {
  component: BeadLine
}

export const AllActive = {
  args: {
    beads: [
      { id: 1, isActive: false },
      { id: 2, isActive: false },
      { id: 3, isActive: false },
      { id: 4, isActive: false },
      { id: 5, isActive: false },
      { id: 6, isActive: false },
      { id: 7, isActive: false }
    ]
  }
}

export const WithDivider = {
  args: {
    beads: [
      { id: 1, isActive: false },
      { id: 2, isActive: false },
      { id: 3, isActive: false },
      { id: 4, isActive: false },
      { id: 5, isActive: false },
      { id: 6, isActive: true },
      { id: 7, isActive: true }
    ]
  }
}

export const AllInactive = {
  args: {
    beads: [
      { id: 1, isActive: true },
      { id: 2, isActive: true },
      { id: 3, isActive: true },
      { id: 4, isActive: true },
      { id: 5, isActive: true },
      { id: 6, isActive: true },
      { id: 7, isActive: true }
    ]
  }
}
