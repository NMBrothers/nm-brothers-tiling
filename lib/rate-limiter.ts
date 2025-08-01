// Simple in-memory rate limiter
// For production, consider using Redis or a database-backed solution

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

class RateLimiter {
  private attempts: Map<string, RateLimitEntry> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;

  constructor(maxAttempts: number = 5, windowMs: number = 15 * 60 * 1000) {
    // 15 minutes default
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  // Clean up expired entries periodically
  private cleanup() {
    const now = Date.now();
    for (const [key, entry] of this.attempts.entries()) {
      if (entry.resetTime <= now) {
        this.attempts.delete(key);
      }
    }
  }

  // Check if the identifier (IP or email) is rate limited
  isRateLimited(identifier: string): boolean {
    this.cleanup();

    const entry = this.attempts.get(identifier);
    const now = Date.now();

    if (!entry || entry.resetTime <= now) {
      // No entry or expired, create new one
      this.attempts.set(identifier, {
        count: 1,
        resetTime: now + this.windowMs,
      });
      return false;
    }

    // Entry exists and is still valid
    if (entry.count >= this.maxAttempts) {
      return true;
    }

    // Increment count
    entry.count++;
    return false;
  }

  // Get remaining time until reset (in seconds)
  getResetTime(identifier: string): number {
    const entry = this.attempts.get(identifier);
    if (!entry) return 0;

    const remaining = Math.max(0, entry.resetTime - Date.now());
    return Math.ceil(remaining / 1000);
  }

  // Reset attempts for an identifier
  reset(identifier: string) {
    this.attempts.delete(identifier);
  }
}

// Create singleton instance
export const contactFormRateLimiter = new RateLimiter(5, 15 * 60 * 1000); // 5 attempts per 15 minutes
