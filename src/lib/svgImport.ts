// @ts-nocheck

import arrLeft from './icons/arr-left.svg';
import arrRight from './icons/arr-right.svg';
import cs from './icons/cs.svg';
import discord from './icons/discord.svg';
import download from './icons/download.svg';
import electron from './icons/electron.svg';
import firebase from './icons/firebase.svg';
import github from './icons/github.svg';
import htmlSvg from './icons/html.svg';
import itchio from './icons/itchio.svg';
import js from './icons/js.svg';
import nodejs from './icons/nodejs.svg';
import react from './icons/react.svg';
import sass from './icons/sass.svg';
import svelte from './icons/svelte.svg';
import tailwind from './icons/tailwind.svg';
import ts from './icons/ts.svg';
import unity from './icons/unity.svg';
import vscode from './icons/vscode.svg';
import web from './icons/web.svg';
import xaml from './icons/xaml.svg';

// import waving from './icons/waving.svg';
// import technologist from './icons/technologist.svg';
// import folder from './icons/folder.svg';

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
