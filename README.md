# Fairdrive Desktop App

Fairdrive Desktop App is a FUSE client for fairOS-dfs. It lets you mount your
pod on your own user space and interact with your data.

## Requirements

#### FUSE

You need [FUSE](http://github.com/libfuse/libfuse) for your OS.

##### Installing fuse on macOS
```
brew install macfuse
```

##### Installing fuse on debian
```
sudo apt-get update
sudo apt-get -qq install libfuse-dev
```

##### Installing fuse on windows
install [winfsp](https://winfsp.dev/rel/)

#### BEE
You will need a bee node running with a valid stamp id.

## Development

#### Requirements

- gcc
- golang installed
- [wails](https://wails.io/docs/gettingstarted/installation#installing-wails)

### Live Development

```
wails dev
```

### Building

```
make binary
```

### Development requirements for windows

#### Tools 
  1.install go

  2.install gcc https://jmeubank.github.io/tdm-gcc/ 

  3.download and install https://winfsp.dev/rel/ and don't forget to check "Developer tools" 

#### Add environment variables

set `CPATH` to `C:\Program Files (x86)\WinFsp\inc\fuse`

set `LIBRARY_PATH` to `C:\Program Files (x86)\WinFsp\lib`

set `CPLUS_INCLUDE_PATH` to `C:\Program Files (x86)\WinFsp\inc\fuse`

#### Problems with npm

Installing frontend dependencies: npm ERR! Unexpected token '.'

This could be a problem to various reasons why your node,npm,nvm installation is corrupt. Probably because you used old nvm (prior to version 1.1.10) which wrongly creates symbolic links. You will have to uninstall nvm and reinstall new node version.

## Dependencies
- [cgofuse](https://github.com/billziss-gh/cgofuse)
- [cobra](github.com/spf13/cobra)
- [fairOS-dfs](github.com/fairdatasociety/fairOS-dfs)
- [wails.io](https://wails.io/)