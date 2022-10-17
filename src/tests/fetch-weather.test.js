import { describe, expect, test } from '@jest/globals';
import fetchWeather from '../datafetch/fetch-weather';

// Helper function to generate API request link
const generateLink = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=66a86bcca603db7ee72a9999499bb3fa&units=metric`;

describe('Fetch weather module', () => {
  test('fetch weather from Minsk', () => {
    fetchWeather(generateLink('Minsk')).then((resp) => {
      expect(resp.name).toBe('Minsk');
      expect(resp.sys.country).toBe('BY');
    });
  });

  test('fetch weather from Non-existent city', () => {
    fetchWeather(generateLink(undefined)).then((resp) => {
      expect(resp.ok).toBeFalsy();
    });
  });
});
