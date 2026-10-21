// Utility for Google Ads and Google Analytics tracking in React + Vite

export const GOOGLE_ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID || 'AW-18528788228';
export const GOOGLE_ADS_CONVERSION_LABEL = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL || '';

/**
 * Fires the Google Ads Lead Form Submission conversion event.
 * 
 * @param {Object} options
 * @param {string} [options.transactionId] - Unique ID (e.g. Firestore Doc ID) to prevent duplicate conversion counts
 * @param {string} [options.email] - User's email (optional, for enhanced conversions)
 * @param {string} [options.phone] - User's phone (optional, for enhanced conversions)
 * @param {string} [options.conversionLabel] - Optional override for the conversion label
 * @param {number} [options.value] - Lead value (optional, e.g. 1.0)
 * @param {string} [options.currency] - Currency code (default 'INR')
 */
export function trackGoogleAdsLeadConversion({
  transactionId,
  email,
  phone,
  conversionLabel = GOOGLE_ADS_CONVERSION_LABEL,
  value = 1.0,
  currency = 'INR'
} = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  // Determine send_to destination
  // If a label is provided, use "AW-18528788228/LABEL". Otherwise, fall back to "AW-18528788228"
  const sendTo = conversionLabel 
    ? `${GOOGLE_ADS_ID}/${conversionLabel.trim()}`
    : GOOGLE_ADS_ID;

  if (typeof window.gtag !== 'function') {
    console.warn('[Google Ads] window.gtag is not initialized. Ensure gtag.js is loaded in index.html.');
    return;
  }

  // Enhanced conversion user data (if supported/enabled in Google Ads)
  if (email || phone) {
    const userData = {};
    if (email) userData.email = email.trim().toLowerCase();
    if (phone) userData.phone_number = phone.trim();

    try {
      window.gtag('set', 'user_data', userData);
    } catch (err) {
      console.warn('[Google Ads] Could not set user_data:', err);
    }
  }

  const eventPayload = {
    send_to: sendTo,
    value: value,
    currency: currency
  };

  if (transactionId) {
    eventPayload.transaction_id = String(transactionId);
  }

  // Fire conversion event
  window.gtag('event', 'conversion', eventPayload);

  if (import.meta.env.DEV) {
    console.log('[Google Ads Conversion Tracked]:', {
      sendTo,
      eventPayload
    });
  }
}
