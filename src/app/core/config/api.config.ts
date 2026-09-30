import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('API_URL');

export const apiConfig = {
  baseUrl: 'http://localhost:5010/api',
};