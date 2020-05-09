#!/usr/bin/env node
const commandLineArgs = require("command-line-args");
const commandLineUsage = require("command-line-usage");

const { executeCommand } = require("./util/executeCommand");

// const { download } = require("./commands/download");
const { listFiles } = require("./commands/listFiles");

// TODO: update help section
const sections = [
  {
    header: "Google Drive CLI",
    content: "A command-line application for Google Drive.",
  },
  {
    header: "Commands",
    content: [
      {
        colA: "download",
        colB: "Download a file from Google Drive.",
      },
      {
        colA: "listFiles",
        colB: "List files from Google Drive.",
      },
    ],
  },
  {
    header: "Options",
    optionList: [],
  },
];
const usage = commandLineUsage(sections);

/* first - parse the main command */
const mainDefinitions = [{ name: "command", defaultOption: true }];
const mainOptions = commandLineArgs(mainDefinitions, {
  stopAtFirstUnknown: true,
});
const argv = mainOptions._unknown || [];

// Help command
if (mainOptions.command === "help") {
  console.log(usage);
}

// Download command
if (mainOptions.command === "download") {
  const downloadDefinitions = [
    { name: "id", type: String },
    { name: "dest", type: String },
  ];
  const downloadOptions = commandLineArgs(downloadDefinitions, { argv });
  console.log("\ndownloadOptions\n============");
  console.log(downloadOptions);
}

// List files command
if (mainOptions.command === "listFiles") {
  const listFilesDefinitions = [{ name: "limit", alias: "l", type: Number }];
  const listFilesOptions = commandLineArgs(listFilesDefinitions, { argv });
  executeCommand(listFiles(listFilesOptions["limit"]));
}
