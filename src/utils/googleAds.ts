/**
 * Google Ads Conversion Tracking Utility
 * Action: YOO ONE - Successful Enquiry
 * Tag ID: AW-18528788228
 */

export interface GoogleAdsLeadConversionParams {
  transactionId?: string;
  email?: string | null;
  phone?: string | null;
}

// Exact send_to destination provided for "YOO ONE - Successful Enquiry"
export const GOOGLE_ADS_CONVERSION_SEND_TO = 'AW-18528788228/GuCyCJ333KQdEIS-m4NF';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Triggers the Google Ads conversion event for a successful enquiry submission.
 * Fails gracefully without throwing errors if gtag is unavailable.
 */
export function trackEnquiryConversion(params?: GoogleAdsLeadConversionParams): void {
  try {
    if (typeof window === 'undefined') {
      return;
    }

    if (typeof window.gtag !== 'function') {
      console.warn('[Google Ads] window.gtag is not defined. Conversion tracking skipped.');
      return;
    }

    // Optional enhanced conversion user data
    if (params?.email || params?.phone) {
      const userData: Record<string, string> = {};
      if (params.email) userData.email = params.email.trim().toLowerCase();
      if (params.phone) userData.phone_number = params.phone.trim();

      try {
        window.gtag('set', 'user_data', userData);
      } catch (err) {
        // Silently continue to conversion event
      }
    }

    const eventPayload: Record<string, unknown> = {
      send_to: GOOGLE_ADS_CONVERSION_SEND_TO,
    };

    if (params?.transactionId) {
      eventPayload.transaction_id = String(params.transactionId);
    }

    window.gtag('event', 'conversion', eventPayload);

    if (import.meta.env.DEV) {
      console.log('[Google Ads Conversion Triggered]:', eventPayload);
    }
  } catch (error) {
    // Graceful failure - never throw or break the user submission flow
    console.warn('[Google Ads] Error triggering conversion:', error);
  }
}
