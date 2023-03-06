import { $, type QRL } from '@builder.io/qwik';

/**
 * Creates a validation functions that validates the range of a string.
 *
 * @param requirement The maximum string range.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function maxRange(
  requirement: string,
  error: string
): QRL<(value: string | null | undefined) => string> {
  return $((value: string | null | undefined) =>
    value && value > requirement ? error : ''
  );
}
