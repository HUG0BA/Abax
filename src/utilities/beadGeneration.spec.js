import { describe, expect, it } from 'vitest'
import {
  generateBeadLine,
  generateBeadsRepresentingInteger
} from '@utilities/beadGeneration.js'

describe('generaBeadsGroup Tests', () => {
  it('Generates 9 beads by default', () => {
    expect(generateBeadLine(0).length).toBe(9)
    expect(generateBeadLine(9).length).toBe(9)
  })

  it('Generates all inactive beads', () => {
    expect(generateBeadLine(0).every((e) => e.isActive)).toBe(false)
  })

  it('Generates all active beads', () => {
    expect(generateBeadLine(9).every((e) => e.isActive)).toBe(true)
  })

  it('Generates 3 active beads', () => {
    expect(generateBeadLine(3).filter((e) => e.isActive === true).length).toBe(
      3
    )
  })

  it('Generates 6 active beads', () => {
    expect(generateBeadLine(6).filter((e) => e.isActive === true).length).toBe(
      6
    )
  })

  it('3 active beads at the end of the array', () => {
    expect(
      generateBeadLine(3)
        .slice(6)
        .every((e) => e.isActive)
    ).toBe(true)
  })

  it('6 active beads at the end of the array', () => {
    expect(
      generateBeadLine(6)
        .slice(4)
        .every((e) => e.isActive)
    ).toBe(true)
  })
})

describe('generateBeadsRepresentingInteger Tests', () => {
  it('generates 1 bead group', () => {
    expect(generateBeadsRepresentingInteger(1).length).toBe(1)
  })

  it('generates 3 beads group', () => {
    expect(generateBeadsRepresentingInteger(100).length).toBe(3)
  })

  it('generates 6 beads group', () => {
    expect(generateBeadsRepresentingInteger(100000).length).toBe(6)
  })

  it('generates 9 beads group', () => {
    expect(generateBeadsRepresentingInteger(100000000).length).toBe(9)
  })

  it('represents number 3', () => {
    expect(
      generateBeadsRepresentingInteger(3)[0]
        .slice(6)
        .every((e) => e.isActive)
    ).toBe(true)
  })

  it('represents number 34', () => {
    expect(
      generateBeadsRepresentingInteger(34)[1]
        .slice(6)
        .every((e) => e.isActive) &&
        generateBeadsRepresentingInteger(34)[0]
          .slice(5)
          .every((e) => e.isActive)
    ).toBe(true)
  })
})
