import { $, type QRL } from '@builder.io/qwik';

/**
 * Creates a validation functions that validates the size of a file list.
 *
 * @param requirement The minimum size.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function minFiles(
  requirement: number,
  error: string
): QRL<(value: FileList | null | undefined) => string> {
  return $((value: FileList | null | undefined) =>
    value?.length && value.length < requirement ? error : ''
  );
}
