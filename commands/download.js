const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");
const { executeCommand } = require("../util/executeCommand");
const os = require("os");
const uuid = require("uuid");

// mimeTypes can be found here: https://developers.google.com/drive/api/v3/ref-export-formats

const download = (fileId, filePath, fileName) => {
  return (auth) => {
    const drive = google.drive({ version: "v3", auth });
    const destPath = path.join(filePath, `${fileName}.pdf`);
    const dest = fs.createWriteStream(destPath);

    drive.files
      .export({
        fileId: fileId,
        mimeType: "application/pdf",
      })
      .then(
        function (success) {
          console.log(success);
          // success.result
          // pipe(dest)
        },
        function (fail) {
          console.log(fail);
          console.log("Error " + fail.result.error.message);
        }
      );
  };
};

executeCommand(
  download(
    "1_WEqYdgDn8i4DCt7TQR_lwiDx30EomxemuEKTpg-5Qc",
    "/Users/donovanmoini/Desktop/",
    "CS"
  )
);

exports.download = download;
