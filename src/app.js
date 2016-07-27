import 'reflect-metadata';
import 'babel-polyfill';
import 'zone.js';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {brewComponent} from './app.component';
import {enableProdMode} from '@angular/core';

enableProdMode();
bootstrap(brewComponent);
