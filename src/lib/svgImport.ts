// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import cs from './icons/cs.svg?src';
import discord from './icons/discord.svg?src';
import download from './icons/download.svg?src';
import electron from './icons/electron.svg?src';
import firebase from './icons/firebase.svg?src';
import github from './icons/github.svg?src';
import htmlSvg from './icons/html.svg?src';
import itchio from './icons/itchio.svg?src';
import js from './icons/js.svg?src';
import nodejs from './icons/nodejs.svg?src';
import react from './icons/react.svg?src';
import sass from './icons/sass.svg?src';
import svelte from './icons/svelte.svg?src';
import tailwind from './icons/tailwind.svg?src';
import ts from './icons/ts.svg?src';
import unity from './icons/unity.svg?src';
import vscode from './icons/vscode.svg?src';
import web from './icons/web.svg?src';
import xaml from './icons/xaml.svg?src';

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
	}
};
