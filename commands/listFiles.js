const { google } = require("googleapis");
const { executeCommand } = require("../util/executeCommand");

/**
 * Lists the names and IDs of up to 10 files.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
const listFiles = (limit = 10) => {
  return (auth) => {
    const drive = google.drive({ version: "v3", auth });
    drive.files.list(
      {
        pageSize: limit,
        fields: "nextPageToken, files(id, name)",
      },
      (err, res) => {
        if (err) return console.log("The API returned an error: " + err);
        const files = res.data.files;
        if (files.length) {
          console.log("Files:");
          files.map((file) => {
            console.log(`${file.name} (${file.id})`);
          });
        } else {
          console.log("No files found.");
        }
      }
    );
  };
};

// executeCommand(listFiles);

exports.listFiles = listFiles;
