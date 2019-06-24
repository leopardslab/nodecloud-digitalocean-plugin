# nodecloud-do-plugin
DigitalOcean plugin for [nodecloud](https://github.com/cloudlibz/nodecloud)

## ✌️ How to setup

[How to get your DigitalOcean credentials](https://cloud.digitalocean.com/settings/api/tokens)

Make sure you have `.nc.config` file in the project root and have `nodecloud-core` installed.

Content of `.nc.config` file is assumed as the following json structure.
It is an array of supported providers.

1.  `name` : Provider name which nodecloud supports.
2.  `tag` : Name that you will use to load the given provider. It is for your reference in code. It can be anything that you may like.
3.  `plugin` : Plugin name which has to be installed before loading a provider.
4.  `configPath` : JSON Object containing the token. configPath: {token: "test-token"}

Config file can contain array of objects for all providers and all will be loaded.
Supported values for `name` : azure, google, aws, digitalocean

```js
const providers = [
  {
    name: "digitalocean",
    tag: "digitalocean",
    plugin: nodeCloudDigitalOceanPlugin,
    configPath: {
      token: "test-token"
    }
  }
];

module.exports = providers;
``` 

## 💻 Development

```
$ git clone https://github.com/Cheesetouched/nodecloud-do-plugin
$ cd nodecloud-do-plugin
$ npm link
$ git clone https://github.com/cloudliz/nodecloud
$ cd nodecloud
$ npm link nodecloud-do-plugin
```