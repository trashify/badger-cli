
<h1 align="center">badger-cli</h1>
<div align="center">
  <strong>Quickly generate metadata badges in terminal</strong>
</div>
<div align="center">
  <a href="https://npmjs.org/package/badger-cli">
    <img src="https://img.shields.io/npm/v/badger-cli.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/badger-cli">
  <img src="https://img.shields.io/npm/dm/badger-cli.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/badger-cli">
    <img src="https://img.shields.io/travis/tiaanduplessis/badger-cli.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/badger-cli/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/badger-cli.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/badger-cli/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/badger-cli.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/badger-cli/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/badger-cli.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20badger-cli!%20https://github.com/tiaanduplessis/badger-cli%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/badger-cli.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="https://github.com/tiaanduplessis">tiaanduplessis</a> and <a href="https://github.com/tiaanduplessis/badger-cli/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
   <li><a href="#about">About</a></li>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## About

CLI just wraps [badge-studio](https://github.com/egoist/badge-studio).


## Install

```sh
$ npm install badger-cli
# OR
$ yarn add badger-cli
```

## Usage

```sh
$ badger --subject=build --status=passing
#<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="88" height="20">
#  <linearGradient id="smooth" x2="0" y2="100%">
#    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
#    <stop offset="1" stop-opacity=".1"/>
#  </linearGradient>
#
#  <clipPath id="round">
#    <rect width="88" height="20" rx="3" fill="#fff"/>
#  </clipPath>
#
#  <g clip-path="url(#round)">
#    <rect width="37" height="20" fill="#555"/>
#    <rect x="37" width="51" height="20" fill="#4c1"/>
#    <rect width="88" height="20" fill="url(#smooth)"/>
#  </g>
#
#  <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
#
#
#    <text x="18.5" y="15" fill="#010101" fill-opacity=".3">build</text>
#
#    <text x="18.5" y="14" fill="#fff">build</text>
#
#    <text x="61.5" y="15" fill="#010101" fill-opacity=".3">passing</text>
#
#    <text x="61.5" y="14" fill="#fff">passing</text>
#  </g>
#</svg>
```

Possible arguments:

- **--subject`**
- **`--status`**
- **`--logo`**

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/badger-cli/issues).

## License

Licensed under the MIT License.
