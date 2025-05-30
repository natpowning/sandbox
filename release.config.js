const config = {
  branches: [
    { name: "main" },
  ],

  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          { type: "ci", release: "patch" },
          { type: "chore", release: "patch" },
          { type: "refactor", release: "patch" },
          { type: "test", release: "patch" },
          { type: "fix", release: "patch" },
          { type: "feat", release: "minor" }
        ],
        preset: "angular"
      }
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/github",
    "@semantic-release/git"
  ]
}

module.exports = config;
