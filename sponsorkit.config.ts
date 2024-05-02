import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  // Providers configs
  github: {},
  opencollective: {},
  patreon: {},
  afdian: {},
  // Rendering configs
  outputDir: '.',
  width: 800,
  formats: ['json', 'svg', 'png'],
  renderer: 'tiers',
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.medium,
    },
    {
      title: 'Silver Sponsors',
      preset: tierPresets.large,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 10,
      preset: tierPresets.xl,
    },
  ],
})
