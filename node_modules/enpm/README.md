This is a proof-of-concept for a new way of installing node modules.

Each version of a module is installed into a flat/predictable pattern.
Symlinks are then created to link the correct versions between packages.

node-gyp, preinstall, postinstall etc... are not supported, and you must
have tar on your machine (see: proof-of-concept) :)

Usage:
----

Install from a local package.json file:

	enpm install

Install a specific package locally

	enpm install express
	enpm install express@3.4.7

