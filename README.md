# Google Drive CLI

A simple CLI for Google Drive. **This is currently a work in progress**

## Installation

`pip install -r requirements.txt`

## Usage

```
python3 gdrive.py [command]                 Runs commands
python3 gdrive.py [command] --help          Prints usage and options for command
python3 gdrive.py --help                    Prints options and commands
```

#### Download files

```
python3 gdrive.py download [OPTIONS]

Options:
  -i, --file-id TEXT      ID of Google Drive file  [required]
  -n, --file-name TEXT    Name that you want to save file as (extension is
                          automatically .pdf)  [required]

  -d, --destination TEXT  Where you want to save downloaded file  [required]
  --help                  Show this message and exit.
```

#### List files

```
python3 gdrive.py list [OPTIONS]

Options:
  -p, --page-size INTEGER  Number of files to list
  --help                   Show this message and exit.
```
