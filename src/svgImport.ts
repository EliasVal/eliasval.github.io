import arrLeft from './static/icons/arr-left.svg';
import arrRight from './static/icons/arr-right.svg';
import cs from './static/icons/cs.svg';
import discord from './static/icons/discord.svg';
import download from './static/icons/download.svg';
import electron from './static/icons/electron.svg';
import firebase from './static/icons/firebase.svg';
import github from './static/icons/github.svg';
import htmlSvg from './static/icons/html.svg';
import itchio from './static/icons/itchio.svg';
import js from './static/icons/js.svg';
import nodejs from './static/icons/nodejs.svg';
import react from './static/icons/react.svg';
import sass from './static/icons/sass.svg';
import svelte from './static/icons/svelte.svg';
import tailwind from './static/icons/tailwind.svg';
import ts from './static/icons/ts.svg';
import unity from './static/icons/unity.svg';
import vscode from './static/icons/vscode.svg';
import web from './static/icons/web.svg';
import xaml from './static/icons/xaml.svg';

// import waving from './static/icons/waving.svg';
// import technologist from './static/icons/technologist.svg';
// import folder from './static/icons/folder.svg';

export const ReturnSvg = (name: string) => {
	switch (name) {
		case 'arrRight':
			return arrRight;
		case 'arrLeft':
			return arrLeft;
		case 'cs':
			return cs;
		case 'discord':
			return discord;
		case 'download':
			return download;
		case 'electron':
			return electron;
		case 'firebase':
			return firebase;
		case 'github':
			return github;
		case 'itchio':
			return itchio;
		case 'html':
			return htmlSvg;
		case 'js':
			return js;
		case 'njs':
			return nodejs;
		case 'react':
			return react;
		case 'scss':
		case 'sass':
			return sass;
		case 'svelte':
			return svelte;
		case 'tailwind':
			return tailwind;
		case 'ts':
			return ts;
		case 'unity':
			return unity;
		case 'vs':
			return vscode;
		case 'web':
			return web;
		case 'wpf':
		case 'xaml':
			return xaml;

		// case 'waving':
		// 	return waving;
		// case 'technologist':
		// 	return technologist;
		// case 'folder':
		// 	return folder;
	}
};
