import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  // Providers configs
  github: {},
  opencollective: {},
  patreon: {},
  afdian: {},
  // Rendering configs
  width: 800,
  renderer: 'tiers',
  formats: ['json', 'svg', 'png'],
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.medium,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 5,
      preset: tierPresets.large,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 10,
      preset: tierPresets.xl,
    },
  ],
})
