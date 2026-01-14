/**
 * i18n Translation System
 * 
 * This module provides a mock translation hook similar to next-intl pattern.
 * Replace with real translation library when needed.
 * 
 * Usage:
 * const t = useTranslations('home');
 * t('hero.title') // Returns the translation or key if not found
 */

import { useCallback, useSyncExternalStore } from 'react';
import en from '@/messages/en.json';
import km from '@/messages/km.json';

type Messages = typeof en;

// Current locale - can be extended for multiple languages
const messages: Record<string, Messages> = {
  en,
  km,
};

// Store locale in localStorage for persistence
const LOCALE_KEY = 'app-locale';

const getStoredLocale = (): string => {
  if (typeof window === 'undefined') return 'en';
  return localStorage.getItem(LOCALE_KEY) || 'en';
};

let currentLocale = getStoredLocale();

// Subscribers for reactive updates
let subscribers: Set<() => void> = new Set();

const notifySubscribers = () => {
  subscribers.forEach((callback) => callback());
};

export const setLocale = (locale: string) => {
  if (messages[locale] && locale !== currentLocale) {
    currentLocale = locale;
    localStorage.setItem(LOCALE_KEY, locale);
    notifySubscribers();
  }
};

export const getLocale = () => currentLocale;

// Subscribe to locale changes
const subscribe = (callback: () => void) => {
  subscribers.add(callback);
  return () => {
    subscribers.delete(callback);
  };
};

// Hook to use locale reactively
export const useLocale = () => {
  return useSyncExternalStore(subscribe, getLocale, () => 'en');
};

// Get nested value from object using dot notation
const getNestedValue = (obj: unknown, path: string): string => {
  const keys = path.split('.');
  let result: unknown = obj;
  
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      return path; // Return the key if path not found
    }
  }
  
  return typeof result === 'string' ? result : path;
};

/**
 * Translation hook - similar to next-intl pattern
 * @param namespace - The namespace to use for translations (e.g., 'home', 'about')
 */
export const useTranslations = (namespace?: string) => {
  const locale = useLocale();
  
  const translate = useCallback((key: string, params?: Record<string, string | number>) => {
    const currentMessages = messages[locale] || messages.en;
    const fullPath = namespace ? `${namespace}.${key}` : key;
    let result = getNestedValue(currentMessages, fullPath);
    
    // Handle interpolation: {{variable}}
    if (params && typeof result === 'string') {
      Object.entries(params).forEach(([paramKey, value]) => {
        result = result.replace(new RegExp(`{{${paramKey}}}`, 'g'), String(value));
      });
    }
    
    return result;
  }, [namespace, locale]);
  
  return translate;
};

/**
 * Get raw translation function without hook
 */
export const t = (key: string, params?: Record<string, string | number>): string => {
  const currentMessages = messages[currentLocale] || messages.en;
  let result = getNestedValue(currentMessages, key);
  
  if (params && typeof result === 'string') {
    Object.entries(params).forEach(([paramKey, value]) => {
      result = result.replace(new RegExp(`{{${paramKey}}}`, 'g'), String(value));
    });
  }
  
  return result;
};

export type { Messages };
