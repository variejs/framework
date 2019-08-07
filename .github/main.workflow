workflow "Build, Test, and Publish" {
  resolves = ["Release"]
  on = "release"
}

# Filter for master branch
action "Is Master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Install Dependencies" {
  needs = "Is Master"
  uses = "actions/npm@master"
  args = "ci"
}

action "Install Peer Dependencies" {
  needs = "Install Dependencies"
  uses = "actions/npm@master"
  args = "run installPeers"
}

action "Test" {
  needs = "Install Peer Dependencies"
  uses = "actions/npm@master"
  args = "test"
}

action "Build" {
  needs = "Test"
  uses = "actions/npm@master"
  args = "build"
}

action "Release" {
  needs = "Build"
  uses = "actions/npm@master"
  args = "run release"
  secrets = ["GITHUB_TOKEN", "NPM_TOKEN"]
}
