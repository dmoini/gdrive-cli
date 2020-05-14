import io
from googleapiclient.http import MediaIoBaseDownload
# import service
from service import drive_service

# TODO: implement parameters for download()


def download(file_id, file_name, file_dir):
    file_id = '19PCR-N3dN9IcU0HbeXAgm1fUEqZ7j4-eagxrLxAJGOE'
    request = drive_service.files().export_media(
        fileId=file_id, mimeType='application/pdf')
    fh = io.FileIO('/Users/donovanmoini/Desktop/test.pdf', 'wb')
    downloader = MediaIoBaseDownload(fh, request)
    done = False
    while done is False:
        status, done = downloader.next_chunk()
        print("Download %d%%." % int(status.progress() * 100))
