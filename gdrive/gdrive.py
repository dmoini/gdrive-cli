import io
import os.path

import click

from googleapiclient.http import MediaIoBaseDownload
from service import drive_service


@click.group()
def cli():
    """
    Simple Google Drive CLI
    """
    pass


@cli.command()
@click.option('--file-id', '-i', 'id', help='ID of Google Drive file', required=True)
@click.option('--file-name', '-n', 'name', help='Name that you want to save file as (extension is automatically .pdf)', required=True)
@click.option('--destination', '-d', 'dest', help='Where you want to save downloaded file', required=True)
def download(id, name, dest):
    request = drive_service.files().export_media(
        fileId=id, mimeType='application/pdf')
    path = os.path.join(dest, name) + '.pdf'
    fh = io.FileIO(path, 'wb')
    downloader = MediaIoBaseDownload(fh, request)
    done = False
    while done is False:
        status, done = downloader.next_chunk()
        print('Download %d%%.' % int(status.progress() * 100))


@cli.command()
@click.option('--page-size', '-p', 'pageSize', default=10, help="Number of files to list", required=False)
def list(pageSize):
    results = drive_service.files().list(
        pageSize=pageSize, fields="nextPageToken, files(id, name)").execute()
    items = results.get('files', [])
    if not items:
        print('No files found.')
    else:
        print('Files:')
        for item in items:
            print(f'{item["name"]} ({item["id"]})')


if __name__ == "__main__":
    cli()
